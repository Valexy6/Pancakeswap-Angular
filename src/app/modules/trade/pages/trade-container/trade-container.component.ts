import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DarkModeService } from 'src/app/modules/shared/services/dark-mode.service';
import { ILink } from 'src/app/models/SecondaryMenuItem';


@Component({
  selector: 'app-trade-container',
  templateUrl: './trade-container.component.html',
  styleUrls: ['./trade-container.component.css']
})
export class TradeContainerComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  isDarkModeOn!: boolean;
  menuItems: ILink[] = [
    { name: 'Swap', url: 'swap' },
    { name: 'Liquidity', url: 'liquidity' },
  ];

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