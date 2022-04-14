import { Component, OnDestroy, OnInit } from '@angular/core';
import { FarmsData } from 'data/farms.data';
import { Subject, takeUntil } from 'rxjs';
import { IFarm } from 'src/app/models/Farms';
import { DarkModeService } from 'src/app/shared/dark-mode/dark-mode.service';

@Component({
  selector: 'app-earn-farms',
  templateUrl: './earn-farms.component.html',
  styleUrls: ['./earn-farms.component.css']
})
export class EarnFarmsComponent implements OnInit, OnDestroy {
  farms: IFarm[] = [...FarmsData];
  destroy$: Subject<boolean> = new Subject<boolean>();
  isDarkModeOn!: boolean;
  constructor(private darkmodeService: DarkModeService ) { 
}

  ngOnInit(): void {this.darkmodeService.darkModeState$
    .pipe(takeUntil(this.destroy$))
    .subscribe((res) => this.isDarkModeOn = res);
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
