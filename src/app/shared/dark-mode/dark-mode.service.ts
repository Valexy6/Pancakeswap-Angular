import { Injectable } from '@angular/core';
import { BehaviorSubject, timeout, timer, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeSelection$ = new BehaviorSubject<boolean>(false);
  darkModeState$ = this.darkModeSelection$.asObservable().pipe(tap(console.log))

  constructor() { }

  setDarkMode(isDarkModeOn: boolean) {
    this.darkModeSelection$.next(isDarkModeOn);
  }

}
