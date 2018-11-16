import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BetType } from '../Models/betType';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BetTypeService {

  betTypeURL: string = 'YourConnectionURL/api/bettype';

  constructor(private http: HttpClient) { }

  getAll(): Observable<BetType[]>
  {
    return this.http.get<BetType[]>(this.betTypeURL);
  }

  getByID(betType: BetType): Observable<BetType>
  {
    return this.http.get<BetType>(this.betTypeURL+ `/${betType.id}`);
  }

  addBet(betType: BetType): Observable<BetType>
  {
    console.log(betType)
    return this.http.post<BetType>(this.betTypeURL, betType, httpOptions);
  }
  
  deleteBet(betType: BetType| number): Observable<BetType[]>
  {
    const id = typeof betType === 'number' ? betType : betType.id;
    console.log(id);
    return this.http.delete<BetType[]>(this.betTypeURL + `/${id}`, httpOptions);
  }

  editBet(betType: BetType): Observable<BetType[]>
  {
    console.log(betType);
    return this.http.put<BetType[]>(this.betTypeURL + `/${betType.id}`, betType, httpOptions);
  }
}
