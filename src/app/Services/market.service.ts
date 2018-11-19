import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Market } from '../Models/market';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  marketURL: string = 'http://10.1.0.129:65410/api/market';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Market[]>
  {
    return this.http.get<Market[]>(this.marketURL);
  }

  getByID(market: Market): Observable<Market>
  {
    return this.http.get<Market>(this.marketURL+ `/${market.id}`);
  }

  addMarket(market: Market): Observable<Market>
  {
    console.log(market)
    return this.http.post<Market>(this.marketURL, market, httpOptions);
  }
  
  deleteMarket(market: Market| number): Observable<Market[]>
  {
    const id = typeof market === 'number' ? market : market.id;
    console.log(id);
    return this.http.delete<Market[]>(this.marketURL + `/${id}`, httpOptions);
  }

  editMarket(market: Market): Observable<Market[]>
  {
    console.log(market);
    return this.http.put<Market[]>(this.marketURL + `/${market.id}`, market, httpOptions);
  }
}
