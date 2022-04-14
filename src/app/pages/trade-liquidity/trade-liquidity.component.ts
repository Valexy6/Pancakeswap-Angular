import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade-liquidity',
  templateUrl: './trade-liquidity.component.html',
  styleUrls: ['./trade-liquidity.component.css']
})
export class TradeLiquidityComponent implements OnInit {
  @Input() isDarkModeOn!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
