import { Component, OnInit } from '@angular/core';
import { IFaqTexts } from 'src/app/models/FaqTexts';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqTexts:IFaqTexts[] = [
    {
    title: "I sold an NFT, where's my BNB?",
    description: "Trades are settled in WBNB, which is a wrapped version of BNB used on BNB Smart Chain. That means that when you sell an item, WBNB is sent to your wallet instead of BNB.\nYou can instantly swap your WBNB for BNB with no trading fees on PancakeSwap."
  },

  {
    title: "When can I trade other NFT Collections?",
    description: "Soon! The current NFT Market is a basic version (phase 1), with early access to trading PancakeSwap NFTs only.\nOther collections will be coming soon. We’ll make an announcement soon about the launch of the V2 Market."
  },

  {
    title: "How can I list my NFT collection on the Market?",
    description: "In Phase 2 of the NFT Marketplace, collections must be whitelisted before they may be listed.\nWe are now accepting applications from NFT collection owners seeking to list their collections."
  },

  {
    title: "What are the fees?",
    description: "100% of all platform fees taken by PancakeSwap from sales are used to buy back and BURN CAKE tokens in our weekly CAKE burns.\nPlatform fees: 2% is subtracted from NFT sales on the market. Subject to change.Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the CAKE burns."
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
