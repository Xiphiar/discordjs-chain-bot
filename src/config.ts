// export interface Chain {
//     name: string;
//     explorerName: string;
//     rest: string;
//     chainId: string;
//     voterAddress?: string;
//     valOperAddress?: string;
// }

// export const CHAINS: Chain[] = [{
//     name: 'Secret Network',
//     explorerName: 'secret',
//     rest: 'https://secret-4.api.trivium.network:1317',
//     chainId: 'secret-4',
//     voterAddress: '',
//     valOperAddress: '',
// }]

export interface Chain {
    name: string;
    cosmosId: string;
    pingMirror: string;
    valAddress: string;
    voteAddress?: string;
    restApi: string;
    chainId: string;
    image: string;
}

export const CHAINS: Chain[] = [
    {
        name: 'Secret Network',
        cosmosId: 'secretnetwork',
        pingMirror: 'https://explorer.trivium.network/secret',
        valAddress: 'secretvaloper1ahawe276d250zpxt0xgpfg63ymmu63a0svuvgw',
        voteAddress: 'secret1ahawe276d250zpxt0xgpfg63ymmu63a0ptj398',
        restApi: 'https://secret-4.api.trivium.network:1317',
        chainId: 'secret-4',
        image: 'secret.png',
    },
    {
        name: 'Sentinel',
        cosmosId: 'sentinel',
        pingMirror: 'https://explorer.trivium.network/sentinel',
        valAddress: 'sentvaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql82nz4kg',
        restApi: 'https://api-sentinel-ia.cosmosia.notional.ventures',
        chainId: 'sentinelhub-2',
        image: 'sentinel.png',
    },
    {
        name: 'Jackal',
        cosmosId: 'jackal',
        pingMirror: 'https://explorer.trivium.network/jackal',
        valAddress: 'jklvaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql8zq9eug',
        restApi: 'https://api.jackalprotocol.com',
        chainId: 'jackal-1',
        image: 'jackal.png',
    },
    {
        name: 'Band Protocol',
        cosmosId: 'bans',
        pingMirror: 'https://explorer.trivium.network/band',
        valAddress: 'bandvaloper1z5nwqcxltx89zt07jmw9jtx2jlerawsauptl6j',
        restApi: 'https://laozi1.bandchain.org/api',
        chainId: 'laozi-mainnet',
        image: 'band.png',
    },
    {
        name: 'Kava',
        cosmosId: 'kava',
        pingMirror: 'https://explorer.trivium.network/kava',
        valAddress: 'kavavaloper1lvlvv4mllg768ay479h79e2wpv9wjm24gpukcs',
        restApi: 'https://rest.cosmos.directory/kava',
        chainId: 'kava_2222-10',
        image: 'kava.png',
    },
    {
        name: 'IRISnet',
        cosmosId: 'irisnet',
        pingMirror: 'https://explorer.trivium.network/iris',
        valAddress: 'iva1uvkmmjtvzxtn9cjhd2c9kdncjfslnql8w7plzc',
        restApi: 'https://rest.cosmos.directory/irisnet',
        chainId: 'irishub-1',
        image: 'irisnet.png',
    },
    {
        name: 'Rizon',
        cosmosId: 'rizon',
        pingMirror: 'https://explorer.trivium.network/rizon',
        valAddress: 'rizonvaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql87543nx',
        restApi: 'https://rest.cosmos.directory/rizon',
        chainId: 'titan-1',
        image: 'rizon.png',
    },
    {
        name: 'IDEP',
        cosmosId: 'idep',
        pingMirror: 'https://explorer.trivium.network/idep',
        valAddress: 'idepvaloper1qwt5w9mm2p5nayxhquetgvq5dm2aadhnt546xr',
        restApi: 'https://idep-api.lavenderfive.com',
        chainId: 'Antora',
        image: 'idep.png',
    },
    {
        name: 'BitSong',
        cosmosId: 'bitsong',
        pingMirror: 'https://explorer.trivium.network/bitsong',
        valAddress: 'bitsongvaloper1lw4aqn2ce65tp80swj5gfz4hhw9hug8hd7ukrs',
        restApi: 'https://api-bitsong-ia.cosmosia.notional.ventures',
        chainId: 'bitsong-2b',
        image: 'bitsong.png',
    },
    {
        name: 'Dyson Protocol',
        cosmosId: 'dyson',
        pingMirror: 'https://explorer.trivium.network/dyson',
        valAddress: 'dysvaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql8nfc8sc',
        restApi: 'https://dyson.api.trivium.network:1317',
        chainId: 'dyson-mainnet-01',
        image: 'dyson.svg',
    },
    {
        name: 'MEME',
        cosmosId: 'meme',
        pingMirror: 'https://explorer.trivium.network/meme',
        valAddress: 'memevaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql8quu63m',
        restApi: 'https://api-meme-1.meme.sx',
        chainId: 'meme-1',
        image: 'meme.png',
    },
    // {
    //     name: 'Orai',
    //     cosmosId: 'orai',
    //     pingMirror: 'https://explorer.trivium.network/oraichain',
    //     valAddress: 'oraivaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql855xth6',
    //     restApi: '',
    //     chainId: '',
    //     image: 'orai.png',
    // },
    {
        name: 'Vidulum',
        cosmosId: 'vidulum',
        pingMirror: 'https://explorer.trivium.network/vidulum',
        valAddress: 'vdlvaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql8s7l2ea',
        restApi: 'https://mainnet-lcd.vidulum.app',
        chainId: 'vidulum-1',
        image: 'vidulum.png',
    },
    
]

export const getChain = (chainId: string) => {
    const chain = CHAINS.find(item => item.chainId === chainId);
    if (!chain) throw `Unable to find chain config for chain ID ${chainId}`;
    return chain;
}

