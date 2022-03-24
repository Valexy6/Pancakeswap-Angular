import { Component, HostListener } from '@angular/core';

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

  @HostListener('window:scroll')
  detectScroll() {
    let scroll: number = window.scrollY;
    this.scrollDeltaY = scroll - this._cache;
    this._cache = scroll;
  }

  setLang(value: string) {
    this.langSelected = value;
  }

}
