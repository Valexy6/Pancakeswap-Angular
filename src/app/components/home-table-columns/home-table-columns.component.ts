import { Component, Input, OnInit } from '@angular/core';
import { IHomeTable } from 'src/app/models/HomeTable';

@Component({
  selector: 'app-home-table-columns',
  templateUrl: './home-table-columns.component.html',
  styleUrls: ['./home-table-columns.component.css']
})
export class HomeTableColumnsComponent implements OnInit {
  @Input() dataTable: IHomeTable[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
