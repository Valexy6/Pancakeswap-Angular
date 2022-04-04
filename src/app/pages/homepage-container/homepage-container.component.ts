import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IHomeTable } from 'src/app/models/HomeTable';
import { HomeDataTableService } from './home-data-table.service';

@Component({
  selector: 'app-homepage-container',
  templateUrl: './homepage-container.component.html',
  styleUrls: ['./homepage-container.component.css']
})
export class HomepageContainerComponent implements OnInit, OnDestroy {

  dataTableFarm!: IHomeTable[];
  dataTableSyrup!: IHomeTable[];
  subscriptions: Subscription[] = [];

  constructor(private homeDataTableService: HomeDataTableService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.homeDataTableService.getAllFarm().subscribe((res) => this.dataTableFarm = res ),
      this.homeDataTableService.getAllSyrup().subscribe((res) => this.dataTableSyrup = res ),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
