import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ITableBase } from 'src/app/models/TableBase';

@Component({
  selector: 'app-table-base-title',
  templateUrl: './table-base-title.component.html',
  styleUrls: ['./table-base-title.component.css'],
})
export class TableBaseTitleComponent implements OnInit {
  @Input() tableBaseTitle!: ITableBase;
  @Input() tableBaseRow!: ITableBase;
  @Output() alphabet = new EventEmitter<any>();
  isAscendic = true;

  constructor() {}

  ngOnInit(): void {}
}
