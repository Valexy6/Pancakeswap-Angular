import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DarkModeService } from '../shared/services/dark-mode.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit, OnDestroy {
  @Input() isDarkModeOn!: boolean;
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
