import { Component, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pancakeswap';

  cache!: number;
  scrollDeltaY!: number;
  langSelected: string = 'en';

  @HostListener('window:scroll')
  detectScroll() {
    let scroll: number = window.scrollY;
    this.scrollDeltaY = scroll - this.cache;
    this.cache = scroll;
  }

  setLang(value: string) {
    this.langSelected = value;
  }

}
