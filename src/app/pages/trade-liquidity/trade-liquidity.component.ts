import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DarkModeService } from 'src/app/shared/dark-mode/dark-mode.service';

@Component({
  selector: 'app-trade-liquidity',
  templateUrl: './trade-liquidity.component.html',
  styleUrls: ['./trade-liquidity.component.css']
})
export class TradeLiquidityComponent implements OnInit, OnDestroy {
  isDarkModeOn!: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private darkmodeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkmodeService.darkModeState$
    .pipe(takeUntil(this.destroy$))
    .subscribe((res) => this.isDarkModeOn = res);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
