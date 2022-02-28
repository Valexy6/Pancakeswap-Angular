import { Component, OnInit } from '@angular/core';
import { ITableBase } from 'src/app/models/TableBase';

@Component({
  selector: 'app-table-base',
  templateUrl: './table-base.component.html',
  styleUrls: ['./table-base.component.css']
})
export class TableBaseComponent implements OnInit {
  tableBaseTitle:ITableBase = {
    position: "#",
    name: "NAME",
    price: "PRICE",
    priceChange: "PRICE CHANGE",
    volume: "VOLUME",
    liquidity: "LIQUIDITY",
  }

  tableBaseRows:ITableBase[] = [{
    position: "1",
    imgToken: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png",
    name: "Tether USD (USDT)",
    price: "$1.00",
    priceChange: "0.03%",
    volume: "$481.66M",
    liquidity: "$839.17M",
  },
  {
    position: "2",
    imgToken: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png",
    name: "Wrapped BNB (WBNB)",
    price: "$374.71",
    priceChange: "4.21%",
    volume: "$461.09M",
    liquidity: "$2.91B",
  },
  {
    position: "3",
    imgToken: "",
    name: "FistToken (Fist)",
    price: "$6.20",
    priceChange: "85.07",
    volume: "$250.28M",
    liquidity: "$2.20M",
  },
  {
    position: "4",
    imgToken: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png",
    name: "BUSD Token (BUSD)",
    price: "$0.99",
    priceChange: "0.02%",
    volume: "$157.01M",
    liquidity: "$1.62B",
  },
  {
    position: "5",
    imgToken: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png",
    name: "Ethereum Token (ETH)",
    price: "2,758.83",
    priceChange: "5.47%",
    volume: "$15.99M",
    liquidity: "$237.98M",
  },
  {
    position: "6",
    imgToken: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d/logo.png",
    name: "USD Coin (USDC)",
    price: "$0.99",
    priceChange: "0.02%",
    volume: "$157.01M",
    liquidity: "$254.37M",
  },
  {
    position: "7",
    imgToken: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png",
    name: "BTCB Token (BTCB)",
    price: "$38,937.06",
    priceChange: "1.04%",
    volume: "$10.95M",
    liquidity: "$238.58M",
  },
  {
    position: "8",
    imgToken: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    name: "PancakeSwap Token (Cake)",
    price: "$6.54",
    priceChange: "3.01%",
    volume: "$10.17M",
    liquidity: "$228.25M",
  },
  {
    position: "9",
    imgToken: "",
    name: "Luna Rush Token (LUS)",
    price: "$1.00",
    priceChange: "11.06%",
    volume: "$9.07M",
    liquidity: "$573.62K",
  },
  {
    position: "10",
    imgToken: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x26193C7fa4354AE49eC53eA2cEBC513dc39A10aa/logo.png",
    name: "SharkShakeSea (SEA)",
    price: "$1.66",
    priceChange: "5.69%",
    volume: "$6.49M",
    liquidity: "$3.67M",
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
