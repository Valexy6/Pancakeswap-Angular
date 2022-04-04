import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IHomeTable } from 'src/app/models/HomeTable';

@Injectable({
  providedIn: 'root'
})
export class HomeDataTableService {

  constructor(private httpClient: HttpClient) { }

  getAllFarm(): Observable<IHomeTable[]> {
    return this.httpClient.get<IHomeTable[]>('http://localhost:3000/farms')
    .pipe(
      tap((data) => console.log(`Farm getAll eseguito ${data}`))
    );
  }

  getAllSyrup(): Observable<IHomeTable[]> {
    return this.httpClient.get<IHomeTable[]>('http://localhost:3000/syrup-pools')
    .pipe(
      tap((data) => console.log(`Syrup getAll eseguito ${data}`))
    );
  }
}
