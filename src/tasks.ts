import { getProposals, getVoted } from "./utils/queries"
import storage from 'node-persist';
import { Proposal } from "secretjs/dist/grpc_gateway/cosmos/gov/v1beta1/gov.pb";
import { newProposalEmbed } from "./utils/embedBuilders";
import { Chain } from "./config";
import { channel } from "./main";

export const checkProposals = async (chain: Chain) => {
    console.log(`Checking Proposals for ${chain.chainId}`)
    let known: Proposal[] = await storage.getItem(`knownProposals-${chain.chainId}`) || []
    let update = false;

    const proposals = await getProposals(chain.chainId);

    for (const prop of proposals){
        if (!prop.proposal_id) continue;
        console.log(prop.proposal_id)

        if (!known.find(k=>k.proposal_id === prop.proposal_id)) {
            known.push(prop);
            update = true;

            const voted = await getVoted(prop.proposal_id, chain)
            const embed = newProposalEmbed(chain, prop, voted);

            //@ts-ignore
            channel.send({ embeds: [embed] });
        }
    }
}