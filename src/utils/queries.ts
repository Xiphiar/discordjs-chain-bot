import { getQuerier } from "./clients"
import storage from 'node-persist';
import { ProposalStatus } from "secretjs/dist/grpc_gateway/cosmos/gov/v1beta1/gov.pb";
import { Chain } from "../config";
import axios from "axios";

export const getActiveProposals = async (chainId: string) => {
    const client = getQuerier(chainId);
    const result = await client.query.gov.proposals({
        //@ts-ignore
        proposal_status: "2",
    })
    return result.proposals || [];
}

export const getProposalDetails = async (proposal_id: string, rest: string) => {
    const { data } = await axios.get(`${rest}/cosmos/gov/v1/proposals/${proposal_id}`)
    console.log(data)
    return data;
}

export const getVoted = async (proposal_id: string, chain: Chain) => {
    if (!chain.voteAddress) { 
        console.error(`No voter address for chain ${chain.chainId}`);
        return undefined;
    }
    const client = getQuerier(chain.chainId);
    try {
        const result = await client.query.gov.vote({
            proposal_id,
            voter: chain.voteAddress,
        })
        console.log('voteresult', result)
        return true;
    } catch(e: any) {
        if ((e.message || e.toString()).includes('not found for proposal')) return false;
        else throw e;
    }
}