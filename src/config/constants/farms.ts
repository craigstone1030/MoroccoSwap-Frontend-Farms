import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 0,
  //   lpSymbol: 'Rouge',
  //   lpAddresses: {
  //     97: '0xEbC781670DA4D22Ff539a95b13C6A54c08517A19',
  //     56: '0xEbC781670DA4D22Ff539a95b13C6A54c08517A19',
  //   },
  //   tokenSymbol: 'KYTHX',
  //   tokenAddresses: {
  //     97: '0xEbC781670DA4D22Ff539a95b13C6A54c08517A19',
  //     56: '0xEbC781670DA4D22Ff539a95b13C6A54c08517A19',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 1,
    lpSymbol: 'KYTHx-BNB LP',
    lpAddresses: {
      97: '0xa829AA741d0228e95B9bb97bCa286D0703c7d6ef',
      56: '0xa829AA741d0228e95B9bb97bCa286D0703c7d6ef',
    },
    tokenSymbol: 'KYTHx',
    tokenAddresses: {
      97: '0x112f7e33aA480b2C0B9Ef8dEB4144C626342AFc4',
      56: '0x112f7e33aA480b2C0B9Ef8dEB4144C626342AFc4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 2,
  //   lpSymbol: 'BUSD-BNB LP',
  //   lpAddresses: {
  //     97: '0xdc954DA77F6baE81c61429ecD2439903C572895d',
  //     56: '0xdc954DA77F6baE81c61429ecD2439903C572895d',
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //     56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'Rouge-BUSD LP',
  //   lpAddresses: {
  //     97: '0xF52be08D8a3ee7A7C1d8591D3E3f8D6A22019121',
  //     56: '0xF52be08D8a3ee7A7C1d8591D3E3f8D6A22019121',
  //   },
  //   tokenSymbol: 'Rouge',
  //   tokenAddresses: {
  //     97: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
  //     56: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  
]

export default farms
