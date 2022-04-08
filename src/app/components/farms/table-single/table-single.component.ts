import { Component, Input, OnInit } from '@angular/core';
import { IFarm } from 'src/app/models/Farms';

@Component({
  selector: 'app-table-single',
  templateUrl: './table-single.component.html',
  styleUrls: ['./table-single.component.css']
})
export class TableSingleComponent implements OnInit {
  @Input() farm: IFarm | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
