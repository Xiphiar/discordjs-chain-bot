import { Chain } from "../config";
import { EmbedBuilder } from 'discord.js';
import { Proposal } from "secretjs/dist/grpc_gateway/cosmos/gov/v1beta1/gov.pb";

export const newProposalEmbed = (chain: Chain, proposal: any, hasVoted?: boolean) => {
	try {
		// TODO have seperate function for beta and v1 proposal types?
		const embed = new EmbedBuilder()
			.setColor(0x00FF00)
			.setTitle(proposal.content.title || proposal.content['@type'] || 'Unknown Title')
			.setURL(`${chain.pingMirror}/gov/${proposal.proposal_id}`)
			.setAuthor({ name: `New Proposal on ${chain.name}` })
			.setDescription(proposal.content.description || JSON.stringify(proposal.content, undefined, 2))
			.setImage(`https://trivium.network/${chain.image}`)
			.addFields(
				{ name: 'Voting Ends', value: new Date(proposal.voting_end_time).toLocaleString('en-US'), inline: true },
			)

			if (typeof hasVoted === 'boolean'){
				embed.addFields({ name: 'Voted', value: hasVoted ? 'Yes' : 'No', inline: true })
			}

		return embed;
	} catch (err: any) {
		console.error(`Error building proposal embed for prop ${proposal.proposal_id} on chain ${chain.chainId}:`, proposal);
		throw err;
	}
}

export const newGenericEmbed = (chain: Chain, proposal: any, details: any, hasVoted?: boolean) => {
	// inside a command, event listener, etc.
	const embed = new EmbedBuilder()
		.setColor(0x00FF00)
		.setTitle(`Proposal ${proposal.proposal_id }`)
		.setURL(`${chain.pingMirror}/gov/${proposal.proposal_id}`)
		.setAuthor({ name: `New Proposal on ${chain.name}`, /*iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org'*/ })
		.setDescription('```'+JSON.stringify(details.proposal.messages, undefined, 2)+'```')
		.setImage(`https://trivium.network/${chain.image}`)
		.addFields(
			{ name: 'Voting Ends', value: new Date(proposal.voting_end_time).toLocaleString('en-US'), inline: true },
		)

		if (typeof hasVoted === 'boolean'){
			embed.addFields({ name: 'Voted', value: hasVoted ? 'Yes' : 'No', inline: true })
		}

	return embed;
}

export const newErrorEmbed = (message: string) => {
	// inside a command, event listener, etc.
	const embed = new EmbedBuilder()
		.setColor(0xf44336)
		.setTitle(`Error`)
		.setDescription(message)

	return embed;
}