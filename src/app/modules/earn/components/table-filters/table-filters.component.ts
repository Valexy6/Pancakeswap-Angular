import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-filters',
  templateUrl: './table-filters.component.html',
  styleUrls: ['./table-filters.component.css']
})
export class TableFiltersComponent implements OnInit {
  @Input() isDarkModeOn = false;
  active = false;
  activeLive = false;
  options: string[] = [
    "Hot",
    "APR",
    "Multiplier",
    "Earned",
    "Liquidity",
  ]
  optionSelected: string = "Hot";
  optionsList!: string[];
  isVisible: boolean = false


  constructor() { }

  ngOnInit(): void {
    this.optionsList =  this.options.filter( item => item !== this.optionSelected);
  }

  selectOption(option: string) {
    this.optionSelected = option;
    this.optionsList =  this.options.filter( item => item !== this.optionSelected);
    this.showOptions();
  }

  showOptions() {
    this.isVisible = !this.isVisible;
  }

}
