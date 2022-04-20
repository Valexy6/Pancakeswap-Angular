import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ILink } from 'src/app/models/SecondaryMenuItem';
import { DarkModeService } from '../../../shared/services/dark-mode.service';


@Component({
  selector: 'app-earn',
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.css']
})
export class EarnComponent implements OnInit, OnDestroy{
  menuItems: ILink[] = [{ name: 'Farms', url: 'farms' }, { name: 'Pools', url: '#' }];
  isDarkModeOn = false;

  private destroy$ = new Subject<void>();

  constructor(private darkmodeService: DarkModeService) {}

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
