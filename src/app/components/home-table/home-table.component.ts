import { Component, Input, OnInit } from '@angular/core';
import { IHomeTable } from 'src/app/models/HomeTable';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.css']
})
export class HomeTableComponent implements OnInit {
  @Input() dataTableFarm: IHomeTable[] = [];
  @Input() dataTableSyrup: IHomeTable[] = [];
  @Input() isTableVisible!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleTableVisibility() {
    this.isTableVisible = !this.isTableVisible;
  }
}