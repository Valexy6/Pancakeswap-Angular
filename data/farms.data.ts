import { IFarm } from "src/app/models/Farms";

export const FarmsData: IFarm[] = [
  {
    name: 'Cake-bnb',
    imgUrl: 'assets/images/bunny-table-img.svg',
    earned: 0,
    apr: 38.06,
    liquidity: 260250779,
    multiplier: 40,
    cakeEarned: 0,
    type: 'core'
  },
  {
    name: 'Busd-bnb',
    imgUrl: 'assets/images/square-yellow-table-img.svg',
    earned: 0,
    apr: 17.83,
    liquidity: 370348979,
    multiplier: 11,
    cakeEarned: 0,
    type: 'core'
  },
  {
    name: 'Yel-bnb',
    imgUrl: 'assets/images/helmet-table-img.svg',
    earned: 0,
    apr: 255.16,
    liquidity: 901863,
    multiplier: 1,
    cakeEarned: 0,
    type: 'farm-auction'
  },
]