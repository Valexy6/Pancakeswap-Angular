import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
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
  destroy$: Subject<boolean> = new Subject<boolean>();
  isTableVisible: boolean = true;

  constructor(private homeDataTableService: HomeDataTableService, private timer: UtilitiesService) { }

  ngOnInit(): void {
    this.homeDataTableService.getAllFarm()
    .pipe(takeUntil(this.destroy$))
    .subscribe((res) => this.dataTableFarm = res);

    this.homeDataTableService.getAllSyrup()
    .pipe(takeUntil(this.destroy$))
    .subscribe((res) => this.dataTableSyrup = res);

    this.timer.timer()
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => this.isTableVisible = !this.isTableVisible);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
