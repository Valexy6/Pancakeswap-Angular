import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IHomeTable } from 'src/app/models/HomeTable';
import { HomeDataTableService } from './home-data-table.service';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-homepage-container',
  templateUrl: './homepage-container.component.html',
  styleUrls: ['./homepage-container.component.css']
})
export class HomepageContainerComponent implements OnInit, OnDestroy {

  dataTableFarm!: IHomeTable[];
  dataTableSyrup!: IHomeTable[];
  subscriptions: Subscription[] = [];
  isTableVisible: boolean = true;

  constructor(private homeDataTableService: HomeDataTableService, private timer: UtilitiesService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.homeDataTableService.getAllFarm().subscribe((res) => this.dataTableFarm = res ),
      this.homeDataTableService.getAllSyrup().subscribe((res) => this.dataTableSyrup = res ),
      this.timer.timer().subscribe(() => this.isTableVisible = !this.isTableVisible),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
