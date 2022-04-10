import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-filters',
  templateUrl: './table-filters.component.html',
  styleUrls: ['./table-filters.component.css']
})
export class TableFiltersComponent implements OnInit {

  active = false;
  activeLive=false;

  constructor() { }

  ngOnInit(): void {
  }

}
