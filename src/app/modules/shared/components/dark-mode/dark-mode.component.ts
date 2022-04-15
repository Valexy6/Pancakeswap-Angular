import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent implements OnInit, OnDestroy {
  isDarkModeOn!: boolean;
  darkModeSubscription!: Subscription;

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkModeSubscription = this.darkModeService.darkModeState$.subscribe((data: boolean) => {
      this.isDarkModeOn = data;
    });
  }

  toggleTheme() {
    this.isDarkModeOn = !this.isDarkModeOn;
    this.darkModeService.setDarkMode(this.isDarkModeOn);
  }

  ngOnDestroy(): void {
    this.darkModeSubscription.unsubscribe();
  }

}
