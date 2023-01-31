import { SecretNetworkClient } from "secretjs";
import { CHAINS } from "../config";

interface QuerierEntry {
    client: SecretNetworkClient;
    chainId: string;
}

const QUERIERS: QuerierEntry[] = CHAINS.map((chain)=>{
    return {
        client: new SecretNetworkClient({
                url: chain.restApi,
                chainId: chain.chainId,
            }),
        chainId: chain.chainId,
    }
});

export const getQuerier = (chainId: string) => {
    const querier = QUERIERS.find(item => item.chainId === chainId)?.client;
    if (!querier) throw `Unable to find querier for chain ID ${chainId}`;
    return querier;
}