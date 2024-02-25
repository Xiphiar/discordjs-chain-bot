import { getProposalDetails, getProposals, getVoted } from "./utils/queries"
import storage from 'node-persist';
import { Proposal } from "secretjs/dist/grpc_gateway/cosmos/gov/v1beta1/gov.pb";
import { newErrorEmbed, newGenericEmbed, newProposalEmbed } from "./utils/embedBuilders";
import { Chain, getChain } from "./config";
import { govChannel, errChannel } from "./main";
import { getQuerier } from "./utils/clients";

export const checkProposals = async (chain: Chain) => {
    if (!chain.proposals) return;
    
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
            govChannel.send({ embeds: [embed] });
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
        errChannel.send({ embeds: [embed] });
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
            errChannel.send({ embeds: [embed] });
        }
    }
}

export const checkIbcClients = async (chain: Chain) => {
    if (!chain.ibc_clients.length) {
        console.log(`Skipping IBC Client checks for ${chain.chainId}`)
        return;
    };

    console.log(`Checking IBC Clients for ${chain.chainId}`)

    const client = getQuerier(chain.chainId);

    for (const client_id of chain.ibc_clients) {
        const {status} = await client.query.ibc_client.clientStatus({ client_id })
        const {client_state} = await client.query.ibc_client.clientState({ client_id })

        if (!client_state || !status) continue;

        // ################
        // Check if expired 
        // ################
        if (status !== 'Active'){
            //@ts-ignore
            const embed = newErrorEmbed(`IBC Client ${client_id} on ${chain.chainId} connecting to ${client_state?.chain_id} has status: ${status}`)
            //@ts-ignore
            errChannel.send({ embeds: [embed] });

            // Skip other checks and move on to next channel
            continue;
        }

        // ######################
        // Check if expiring Soon
        // ######################

        //@ts-ignore - Get counterparty client
        if (!client_state.chain_id || !client_state.latest_height) {
            console.log(`IBC Client ${client_id} on ${chain.chainId} has no latest_height`, client_state)
            continue;
        }
        //@ts-ignore
        const counterClient = getQuerier(client_state.chain_id);

        //@ts-ignore FUCK OFF
        const updateBlock = await counterClient.query.tendermint.getBlockByHeight({height: client_state.latest_height.revision_height});
        if (!updateBlock.block?.header?.time) {
            console.log(`Could not find counterparty block for IBC Client ${client_id} on ${chain.chainId}`)
            continue;
        }

        const lastDate = new Date(updateBlock.block.header.time as string)
        const now = new Date()

        const secondsSinceLastUpdate = Math.ceil((now.valueOf() - lastDate.valueOf()) / 1000);

        //@ts-ignore fucking secret.js
        const trustSeconds = client_state.trusting_period.slice(0, -1)
        
        console.log(`Client is ${secondsSinceLastUpdate}s old and is trusted for ${trustSeconds}s`)

        const warnSeconds = Math.ceil(trustSeconds * .75)
        if (secondsSinceLastUpdate > warnSeconds) {
            const expiresIn = Math.ceil((trustSeconds - secondsSinceLastUpdate)/60)
            //@ts-ignore
            const embed = newErrorEmbed(`IBC Client ${client_id} on ${chain.chainId} connecting to ${client_state?.chain_id} will expire in: ${expiresIn} minutes!`)
            //@ts-ignore
            errChannel.send({ embeds: [embed] });
        }
        
    }
}