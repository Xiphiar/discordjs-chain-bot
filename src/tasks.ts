import { getProposalDetails, getProposals, getVoted } from "./utils/queries"
import storage from 'node-persist';
import { Proposal } from "secretjs/dist/grpc_gateway/cosmos/gov/v1beta1/gov.pb";
import { newGenericEmbed, newProposalEmbed } from "./utils/embedBuilders";
import { Chain } from "./config";
import { channel } from "./main";

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