import { Chain } from "../config";
import { EmbedBuilder } from 'discord.js';
import { Proposal } from "secretjs/dist/grpc_gateway/cosmos/gov/v1beta1/gov.pb";

export const newProposalEmbed = (chain: Chain, proposal: any, hasVoted?: boolean) => {
// inside a command, event listener, etc.
	const embed = new EmbedBuilder()
		.setColor(0x00FF00)
		.setTitle(proposal.content.title)
		.setURL(`${chain.pingMirror}/proposals/${proposal.proposal_id}`)
		.setAuthor({ name: `New Proposal on ${chain.name}`, /*iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org'*/ })
		.setDescription(proposal.content.description)
		.setImage(`https://trivium.network/${chain.image}`)
		.addFields(
			{ name: 'Voting Ends', value: new Date(proposal.voting_end_time).toLocaleString('en-US'), inline: true },
		)

		if (typeof hasVoted === 'boolean'){
			embed.addFields({ name: 'Voted', value: hasVoted ? 'Yes' : 'No', inline: true })
		}
		
	return embed;
}