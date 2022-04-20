import { Component, Input, OnInit } from '@angular/core';
import { IFarm } from 'src/app/models/Farms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() farms: IFarm[] = [];
  @Input() isDarkModeOn = false;

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}
