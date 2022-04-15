import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IHomeTable } from 'src/app/models/HomeTable';

import { UtilitiesService } from 'src/app/services/utilities.service';
import { DarkModeService } from '../../shared/services/dark-mode.service';
import { HomeDataTableService } from '../services/home-data-table.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  dataTableFarm!: IHomeTable[];
  dataTableSyrup!: IHomeTable[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  isTableVisible: boolean = true;
  isDarkModeOn!: boolean;

  constructor(private homeDataTableService: HomeDataTableService, private timer: UtilitiesService, private darkmodeService: DarkModeService) { }

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

    this.darkmodeService.darkModeState$
    .pipe(takeUntil(this.destroy$))
    .subscribe((res) => this.isDarkModeOn = res);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
