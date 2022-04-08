import { ILink } from "./SecondaryMenuItem";

export interface IFarm {
  name: string;
  earned: number;
  apr: number;
  liquidity: number;
  multiplier: number;
  cakeEarned: number;
  links: ILink[];
  type: 'core' | 'farm-auction'
}
