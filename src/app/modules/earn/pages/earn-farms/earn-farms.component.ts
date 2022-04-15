import { Component, OnDestroy, OnInit } from '@angular/core';
import { FarmsData } from 'data/farms.data';
import { Subject, takeUntil } from 'rxjs';
import { IFarm } from 'src/app/models/Farms';
import { DarkModeService } from 'src/app/modules/shared/services/dark-mode.service';


@Component({
  selector: 'app-earn-farms',
  templateUrl: './earn-farms.component.html',
  styleUrls: ['./earn-farms.component.css']
})
export class EarnFarmsComponent implements OnInit, OnDestroy {
  farms: IFarm[] = [...FarmsData];
  isDarkModeOn = false;

  private destroy$ = new Subject<void>();
  
  constructor(private darkmodeService: DarkModeService ) {}

  ngOnInit(): void {
    this.darkmodeService.darkModeState$
    .pipe(takeUntil(this.destroy$))
    .subscribe(state => this.isDarkModeOn = state);
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
