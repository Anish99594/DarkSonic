import { defineChain } from 'viem'

export const sonicBlazeTestnet = defineChain({
    id: 57054,
    name: 'Sonic',
    nativeCurrency: {
      decimals: 18,
      name: 'Sonic',
      symbol: 'S',
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.blaze.soniclabs.com/'],
        webSocket: ['wss://sonic-rpc.publicnode.com'],
      },
    },
    blockExplorers: {
      default: { name: 'Explorer', url: 'https://testnet.sonicscan.org/' },
    },
  })