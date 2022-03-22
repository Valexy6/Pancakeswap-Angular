import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeSelection$ = new BehaviorSubject<boolean>(false);
  darkModeState$ = this.darkModeSelection$.asObservable()

  constructor() { }

  setDarkMode(isDarkModeOn: boolean) {
    this.darkModeSelection$.next(isDarkModeOn);
  }

}
