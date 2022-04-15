import { ILink } from "./SecondaryMenuItem";

export interface IFarm {
  name: string;
  imgUrl: string;
  earned: number;
  apr: number;
  liquidity: number;
  multiplier: number;
  cakeEarned: number;
  type: 'core' | 'farm-auction'
}
