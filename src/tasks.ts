import { getProposalDetails, getProposals, getVoted } from "./utils/queries"
import storage from 'node-persist';
import { Proposal } from "secretjs/dist/grpc_gateway/cosmos/gov/v1beta1/gov.pb";
import { newErrorEmbed, newGenericEmbed, newProposalEmbed } from "./utils/embedBuilders";
import { Chain } from "./config";
import { channel } from "./main";
import { getQuerier } from "./utils/clients";

export const checkProposals = async (chain: Chain) => {
    console.log(`Checking Proposals for ${chain.chainId}`)

    const key = `knownProposals-${chain.chainId}`
    let known: Proposal[] = await storage.getItem(key) || []
    let update = false;

    const proposals = await getProposals(chain.chainId);

    for (const prop of proposals){
        if (!prop.proposal_id) continue;
        console.log(prop.proposal_id)

        if (!known.find(k=>k.proposal_id === prop.proposal_id)) {
            known.push(prop);
            update = true;

            const voted = await getVoted(prop.proposal_id, chain)
            
            const details = !prop.content ? await getProposalDetails(prop.proposal_id, chain.restApi) : undefined;
            const embed = prop.content ? newProposalEmbed(chain, prop, voted) : newGenericEmbed(chain, prop, details, voted);

            //@ts-ignore
            channel.send({ embeds: [embed] });
        }
    }
    await storage.setItem(key, known)
}

export const checkBalances = async (chain: Chain) => {
    if (!chain.accounts.length) {
        console.log(`Skipping balance checks for ${chain.chainId}`)
        return;
    };
    if (!chain.min_balance) {
        console.error(`Chain ${chain.chainId} has accounts monitored but 'min_balance' is not defined!`)
        const embed = newErrorEmbed(`Chain ${chain.chainId} has accounts monitored but 'min_balance' is not defined!`)
        //@ts-ignore
        channel.send({ embeds: [embed] });
        return;
    }
    console.log(`Checking Account Balances for ${chain.chainId}`)

    const client = getQuerier(chain.chainId);

    for (const address of chain.accounts) {
        const {balance} = await client.query.bank.balance({ address, denom: chain.min_balance.denom })
        if (!balance?.amount || parseInt(balance.amount) < chain.min_balance.amount) {

            const fullAmount = parseInt(balance?.amount || '0') / Math.pow(10, chain.min_balance.decimals)

            const embed = newErrorEmbed(`Balance of account ${address} on ${chain.chainId} is low: ${fullAmount.toFixed(2)} ${chain.min_balance.fullDenom}`)
            //@ts-ignore
            channel.send({ embeds: [embed] });
        }
    }
}