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
        pingMirror: 'https://ping.pub/secret',
        voteAddress: 'secret1ahawe276d250zpxt0xgpfg63ymmu63a0ptj398',
        restApi: 'https://secret-4.api.trivium.network:1317',
        chainId: 'secret-4',
        image: 'secret.png',
        accounts: ['secret1v29569qjca5uda5nsrvkfmlj93tv869ks2ajcq'],
        ibc_clients: [],
        validators: ['secretvaloper1ahawe276d250zpxt0xgpfg63ymmu63a0svuvgw'],
        proposals: true,
        min_balance: {
            amount: 20_000000,
            denom: 'uscrt',
            fullDenom: 'SCRT',
            decimals: 6,
        }
    },
    {
        name: 'Sentinel',
        cosmosId: 'sentinel',
        pingMirror: 'https://ping.pub/sentinel',
        restApi: 'https://rest.cosmos.directory/sentinel',
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
        pingMirror: 'https://ping.pub/jackal',
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
        pingMirror: 'https://ping.pub/band',
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
        pingMirror: 'https://ping.pub/iris',
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
        pingMirror: 'https://ping.pub/rizon',
        restApi: 'https://rest.cosmos.directory/rizon',
        chainId: 'titan-1',
        image: 'rizon.png',
        validators: ['rizonvaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql87543nx'],
        accounts: [],
        ibc_clients: [],
        proposals: true,
    },
    {
        name: 'BitSong',
        cosmosId: 'bitsong',
        pingMirror: 'https://ping.pub/bitsong',
        restApi: 'https://rest.cosmos.directory/bitsong',
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
        pingMirror: 'https://ping.pub/dyson',
        restApi: 'https://dyson.api.trivium.network:1317',
        chainId: 'dyson-mainnet-01',
        image: 'dyson.svg',
        validators: ['dysvaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql8nfc8sc'],
        accounts: ['dys1jct5gn7gpknl0kmqkm3agfwxm2mmtekwul7y9r', 'dys1eqzquzqmnyn8aqd0js5g5lwscp6g4k6trhu2nj'],
        ibc_clients: [], //['07-tendermint-2'],
        proposals: true,
        min_balance: {
            amount: 2000,
            denom: 'dys',
            fullDenom: 'DYS',
            decimals: 0,
        }
    },
    {
        name: 'MEME',
        cosmosId: 'meme',
        pingMirror: 'https://ping.pub/meme',
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
        pingMirror: 'https://ping.pub/oraichain',
        restApi: 'http://lcd.orai.io',
        chainId: 'Oraichain',
        image: 'orai.png',
        validators: ['oraivaloper1uvkmmjtvzxtn9cjhd2c9kdncjfslnql855xth6'],
        accounts: [],
        ibc_clients: [],
        proposals: true,
    },
    // {
    //     name: 'Nois',
    //     cosmosId: 'nois',
    //     pingMirror: 'https://ping.pub/nois',
    //     restApi: 'https://api-nois.sr20de.xyz',
    //     chainId: 'nois-1',
    //     image: 'archway.png',
    //     validators: [],
    //     accounts: ['nois1jct5gn7gpknl0kmqkm3agfwxm2mmtekwjkt9hc','nois1eqzquzqmnyn8aqd0js5g5lwscp6g4k6td7ftpf'],
    //     ibc_clients: ['07-tendermint-15'],
    //     proposals: false,
    //     min_balance: {
    //         amount: 1_500000,
    //         denom: 'unois',
    //         fullDenom: 'NOIS',
    //         decimals: 6,
    //     }
    // },
    // {
    //     name: 'Nois Testnet',
    //     cosmosId: 'nois',
    //     pingMirror: 'https://ping.pub/nois',
    //     restApi: 'https://nois-testnet-api.polkachu.com',
    //     chainId: 'nois-testnet-005',
    //     image: 'archway.png',
    //     validators: [],
    //     accounts: ['nois1jct5gn7gpknl0kmqkm3agfwxm2mmtekwjkt9hc','nois1eqzquzqmnyn8aqd0js5g5lwscp6g4k6td7ftpf'],
    //     ibc_clients: [],
    //     proposals: false,
    //     min_balance: {
    //         amount: 100_000000,
    //         denom: 'unois',
    //         fullDenom: 'NOIS',
    //         decimals: 6,
    //     }
    // },
    {
        name: 'Osmosis',
        cosmosId: 'osmosis',
        pingMirror: 'https://ping.pub/osmosis',
        restApi: 'https://lcd.osmosis.zone',
        chainId: 'osmosis-1',
        image: 'osmosis.png',
        validators: [],
        accounts: ['osmo1jct5gn7gpknl0kmqkm3agfwxm2mmtekwt99ldj','osmo1eqzquzqmnyn8aqd0js5g5lwscp6g4k6t5d83mr'],
        ibc_clients: ['07-tendermint-2407'],
        proposals: false,
        min_balance: {
            amount: 10_000000,
            denom: 'uosmo',
            fullDenom: 'OSMO',
            decimals: 6,
        }
    },
    // {
    //     name: 'Neutron Testnet',
    //     cosmosId: 'neutrontestnet',
    //     pingMirror: 'https://testnet.ping.pub/neutron',
    //     restApi: 'https://rest-falcron.pion-1.ntrn.tech',
    //     chainId: 'pion-1',
    //     image: 'neutron.png',
    //     validators: [],
    //     accounts: ['neutron14j6t348dqetup8aaycxdzek2dennkhqcl2mxan', 'neutron1frgmdv4pl2af8lfphy6apd66z63ph44nynfuwh'],
    //     ibc_clients: ['07-tendermint-155'],
    //     proposals: true,
    //     min_balance: {
    //         amount: 5_000000,
    //         denom: 'untrn',
    //         fullDenom: 'NTRN',
    //         decimals: 6,
    //     }
    // },
    // {
    //     name: 'Cosmos Testnet',
    //     cosmosId: 'cosmoshubtestnet',
    //     pingMirror: 'https://testnet.ping.pub/cosmos',
    //     restApi: 'https://rest.sentry-01.theta-testnet.polypore.xyz',
    //     chainId: 'theta-testnet-001',
    //     image: 'cosmos.png',
    //     validators: [],
    //     accounts: ['cosmos14j6t348dqetup8aaycxdzek2dennkhqcm4jy85'],
    //     ibc_clients: ['07-tendermint-2654'],
    //     proposals: true,
    //     min_balance: {
    //         amount: 2_000000,
    //         denom: 'uatom',
    //         fullDenom: 'ATOM',
    //         decimals: 6,
    //     }
    // },
]

export const getChain = (chainId: string) => {
    const chain = CHAINS.find(item => item.chainId === chainId);
    if (!chain) throw `Unable to find chain config for chain ID ${chainId}`;
    return chain;
}

