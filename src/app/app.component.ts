import { Component, HostListener } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DarkModeService } from './modules/shared/components/dark-mode/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pancakeswap';

  private _cache!: number;
  scrollDeltaY!: number;
  langSelected: string = 'en';
  destroy$: Subject<boolean> = new Subject<boolean>();
  isDarkModeOn!: boolean;

  constructor(private darkmodeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkmodeService.darkModeState$
    .pipe(takeUntil(this.destroy$))
    .subscribe((res) => this.isDarkModeOn = res);
  }

  @HostListener('window:scroll')
  detectScroll() {
    let scroll: number = window.scrollY;
    this.scrollDeltaY = scroll - this._cache;
    this._cache = scroll;
  }

  setLang(value: string) {
    this.langSelected = value;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
