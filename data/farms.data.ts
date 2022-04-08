import { IFarm } from "src/app/models/Farms";

export const FarmsData: IFarm[] = [
  {
    name: 'Cake-bnb',
    earned: 0,
    apr: 38.06,
    liquidity: 260250779,
    multiplier: 40,
    links: [
      {
        name: 'Get CAKE-BNB LP',
        url: '',
      },
      {
        name: 'View Contract',
        url: '',
      },
      {
        name: 'See Pair Info',
        url: '',
      }
    ],
    cakeEarned: 0,
    type: 'core'
  },
  {
    name: 'Busd-bnb',
    earned: 0,
    apr: 17.83,
    liquidity: 370348979,
    multiplier: 11,
    links: [
      {
        name: 'Get Busd-BNB LP',
        url: '',
      },
      {
        name: 'View Contract',
        url: '',
      },
      {
        name: 'See Pair Info',
        url: '',
      }
    ],
    cakeEarned: 0,
    type: 'core'
  },
  {
    name: 'Yel-bnb',
    earned: 0,
    apr: 255.16,
    liquidity: 901863,
    multiplier: 1,
    links: [
      {
        name: 'Get Yel-BNB LP',
        url: '',
      },
      {
        name: 'View Contract',
        url: '',
      },
      {
        name: 'See Pair Info',
        url: '',
      }
    ],
    cakeEarned: 0,
    type: 'farm-auction'
  },
]