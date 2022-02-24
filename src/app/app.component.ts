import { Component, HostListener } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pancakeswap';

  cache!: number;
  scrollDeltaY!: number;

  @HostListener('window:scroll')
  detectScroll() {
    let scroll: number = window.scrollY;
    this.scrollDeltaY = scroll - this.cache;
    this.cache = scroll;
  }
}
