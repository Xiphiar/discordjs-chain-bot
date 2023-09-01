export interface Chain {
    name: string;
    cosmosId: string;
    pingMirror: string;
    voteAddress?: string;
    restApi: string;
    chainId: string;
    image: string;
    min_balance?: {
        amount: number;
        denom: string;
        decimals: number;
        fullDenom: string;
    };
    accounts: string[];
    ibc_clients: string[];
    validators: string[];
    proposals: boolean;
}

export const CHAINS: Chain[] = [
    {
        name: 'Secret Network',
        cosmosId: 'secretnetwork',
        pingMirror: 'https://explorer.trivium.network/secret',
        voteAddress: 'secret1ahawe276d250zpxt0xgpfg63ymmu63a0ptj398',
        restApi: 'https://secret-4.api.trivium.network:1317',
        chainId: 'secret-4',
        image: 'secret.png',
        accounts: ['secret1v29569qjca5uda5nsrvkfmlj93tv869ks2ajcq'],
        ibc_clients: [],
        validators: ['secretvaloper1ahawe276d250zpxt0xgpfg63ymmu63a0svuvgw'],
        proposals: true,
        min_balance: {
            amount: 100_000000,
            denom: 'uscrt',
            fullDenom: 'SCRT',
            decimals: 6,
        }
    },
    {
        name: 'Sentinel',
        cosmosId: 'sentinel',
        pingMirror: 'https://explorer.trivium.network/sentinel',
        restApi: 'https://api-sentinel-ia.cosmosia.notional.ventures',
        chainId: 'sentinelhub-2',
        image: 'sentinel.png',
        accounts: ['sent1jct5gn7gpknl0kmqkm3agfwxm2mmtekwc9qkl0'],
        ibc_clients: [],
        validators: ['sentvaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql82nz4kg'],
        proposals: true,
        min_balance: {
            amount: 100_000000,
            denom: 'udvpn',
            fullDenom: 'DVPN',
            decimals: 6,
        }
    },
    {
        name: 'Jackal',
        cosmosId: 'jackal',
        pingMirror: 'https://explorer.trivium.network/jackal',
        restApi: 'https://api.jackalprotocol.com',
        chainId: 'jackal-1',
        image: 'jackal.png',
        accounts: ['jkl1jct5gn7gpknl0kmqkm3agfwxm2mmtekw6qc7zl'],
        ibc_clients: [],
        validators: ['jklvaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql8zq9eug'],
        proposals: true,
        min_balance: {
            amount: 20_000000,
            denom: 'ujkl',
            fullDenom: 'JKL',
            decimals: 6,
        }
    },
    {
        name: 'Band Protocol',
        cosmosId: 'bans',
        pingMirror: 'https://explorer.trivium.network/band',
        restApi: 'https://laozi1.bandchain.org/api',
        chainId: 'laozi-mainnet',
        image: 'band.png',
        validators: ['bandvaloper1z5nwqcxltx89zt07jmw9jtx2jlerawsauptl6j'],
        accounts: [],
        ibc_clients: [],
        proposals: true,
    },
    {
        name: 'IRISnet',
        cosmosId: 'irisnet',
        pingMirror: 'https://explorer.trivium.network/iris',
        restApi: 'https://rest.cosmos.directory/irisnet',
        chainId: 'irishub-1',
        image: 'irisnet.png',
        validators: ['iva1uvkmmjtvzxtn9cjhd2c9kdncjfslnql8w7plzc'],
        accounts: [],
        ibc_clients: [],
        proposals: true,
    },
    {
        name: 'Rizon',
        cosmosId: 'rizon',
        pingMirror: 'https://explorer.trivium.network/rizon',
        restApi: 'https://rest.cosmos.directory/rizon',
        chainId: 'titan-1',
        image: 'rizon.png',
        validators: ['rizonvaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql87543nx'],
        accounts: [],
        ibc_clients: [],
        proposals: true,
    },
    {
        name: 'IDEP',
        cosmosId: 'idep',
        pingMirror: 'https://explorer.trivium.network/idep',
        restApi: 'https://idep-api.lavenderfive.com',
        chainId: 'Antora',
        image: 'idep.png',
        validators: ['idepvaloper1qwt5w9mm2p5nayxhquetgvq5dm2aadhnt546xr'],
        accounts: [],
        ibc_clients: [],
        proposals: true,
    },
    {
        name: 'BitSong',
        cosmosId: 'bitsong',
        pingMirror: 'https://explorer.trivium.network/bitsong',
        restApi: 'https://api-bitsong-ia.cosmosia.notional.ventures',
        chainId: 'bitsong-2b',
        image: 'bitsong.png',
        validators: ['bitsongvaloper1lw4aqn2ce65tp80swj5gfz4hhw9hug8hd7ukrs'],
        accounts: [],
        ibc_clients: [],
        proposals: true,
    },
    {
        name: 'Dyson Protocol',
        cosmosId: 'dyson',
        pingMirror: 'https://explorer.trivium.network/dyson',
        restApi: 'https://dyson.api.trivium.network:1317',
        chainId: 'dyson-mainnet-01',
        image: 'dyson.svg',
        validators: ['dysvaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql8nfc8sc'],
        accounts: [],
        ibc_clients: [],
        proposals: true,
    },
    {
        name: 'MEME',
        cosmosId: 'meme',
        pingMirror: 'https://explorer.trivium.network/meme',
        restApi: 'https://api-meme-1.meme.sx',
        chainId: 'meme-1',
        image: 'meme.png',
        validators: ['memevaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql8quu63m'],
        accounts: [],
        ibc_clients: [],
        proposals: true,
    },
    {
        name: 'Orai',
        cosmosId: 'orai',
        pingMirror: 'https://explorer.trivium.network/oraichain',
        restApi: 'http://lcd.orai.io',
        chainId: 'Oraichain',
        image: 'orai.png',
        validators: ['oraivaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql855xth6'],
        accounts: [],
        ibc_clients: [],
        proposals: true,
    },
    {
        name: 'Vidulum',
        cosmosId: 'vidulum',
        pingMirror: 'https://explorer.trivium.network/vidulum',
        restApi: 'https://mainnet-lcd.vidulum.app',
        chainId: 'vidulum-1',
        image: 'vidulum.png',
        validators: ['vdlvaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql8s7l2ea'],
        accounts: [],
        ibc_clients: [],
        proposals: true,
    },
    {
        name: 'Archway',
        cosmosId: 'archway',
        pingMirror: 'https://explorer.trivium.network/archway',
        restApi: 'https://archway.api.trivium.network:1317',
        chainId: 'archway-1',
        image: 'archway.png',
        validators: ['archwayvaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql8mz786s'],
        accounts: ['archway1jct5gn7gpknl0kmqkm3agfwxm2mmtekwk42t3h','archway1eqzquzqmnyn8aqd0js5g5lwscp6g4k6tfag98x'],
        ibc_clients: ['07-tendermint-22'],
        proposals: true,
        min_balance: {
            amount: 50_000000000000000000,
            denom: 'aarch',
            fullDenom: 'ARCH',
            decimals: 18,
        }
    },
    {
        name: 'Archway Constantine',
        cosmosId: 'archway',
        pingMirror: 'https://explorer.trivium.network/archway',
        restApi: 'https://api.constantine.archway.tech',
        chainId: 'constantine-3',
        image: 'archway.png',
        validators: [],
        accounts: ['archway1jct5gn7gpknl0kmqkm3agfwxm2mmtekwk42t3h','archway1eqzquzqmnyn8aqd0js5g5lwscp6g4k6tfag98x'],
        ibc_clients: ['07-tendermint-39'],
        proposals: false,
        min_balance: {
            amount: 20_000000000000000000,
            denom: 'aconst',
            fullDenom: 'CONST',
            decimals: 18,
        }
    },
    {
        name: 'Nois',
        cosmosId: 'nois',
        pingMirror: 'https://ping.pub/nois',
        restApi: 'https://api-nois.sr20de.xyz',
        chainId: 'nois-1',
        image: 'archway.png',
        validators: [],
        accounts: ['nois1jct5gn7gpknl0kmqkm3agfwxm2mmtekwjkt9hc','nois1eqzquzqmnyn8aqd0js5g5lwscp6g4k6td7ftpf'],
        ibc_clients: ['07-tendermint-15'],
        proposals: false,
        min_balance: {
            amount: 1_500000,
            denom: 'unois',
            fullDenom: 'NOIS',
            decimals: 6,
        }
    },
    {
        name: 'Nois Testnet',
        cosmosId: 'nois',
        pingMirror: 'https://ping.pub/nois',
        restApi: 'https://nois-testnet-api.polkachu.com',
        chainId: 'nois-testnet-005',
        image: 'archway.png',
        validators: [],
        accounts: ['nois1jct5gn7gpknl0kmqkm3agfwxm2mmtekwjkt9hc','nois1eqzquzqmnyn8aqd0js5g5lwscp6g4k6td7ftpf'],
        ibc_clients: ['07-tendermint-47'],
        proposals: false,
        min_balance: {
            amount: 100_000000,
            denom: 'unois',
            fullDenom: 'NOIS',
            decimals: 6,
        }
    },
]

export const getChain = (chainId: string) => {
    const chain = CHAINS.find(item => item.chainId === chainId);
    if (!chain) throw `Unable to find chain config for chain ID ${chainId}`;
    return chain;
}

