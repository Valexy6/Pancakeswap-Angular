import { Injectable } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  
  timer(): Observable<number> {
    return interval(6000).pipe(
      tap(() => console.log(`timer value emitted`))
    );
  }

  constructor() { }
}
