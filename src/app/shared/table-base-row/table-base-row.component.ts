import { Component, Input, OnInit } from '@angular/core';
import { ITableBase } from 'src/app/models/TableBase';

@Component({
  selector: 'app-table-base-row',
  templateUrl: './table-base-row.component.html',
  styleUrls: ['./table-base-row.component.css']
})
export class TableBaseRowComponent implements OnInit {
  @Input() tableBaseRows!:ITableBase;

  constructor() { }

  ngOnInit(): void {
  }

}
