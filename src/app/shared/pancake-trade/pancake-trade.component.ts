import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pancake-trade',
  templateUrl: './pancake-trade.component.html',
  styleUrls: ['./pancake-trade.component.css']
})
export class PancakeTradeComponent implements OnInit {
  @Input() colorLink!: string;
  @Input() isDarkModeOn!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
