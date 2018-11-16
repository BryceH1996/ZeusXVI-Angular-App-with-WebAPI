import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sport } from '../Model/Sport';
import { Country } from '../Model/Country';
import { Tournament } from '../Model/Tournament';
import { Events } from '../Model/Events';
import { BetType } from '../Model/betType';
import { Market } from '../Model/market';
import { Bet } from '../Model/bet';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class SportService {

  sportURL: string = 'http://10.1.0.129:65410/api/sport';
  countryURL: string = 'http://10.1.0.129:65410/api/country';
  TournaURL: string = 'http://10.1.0.129:65410/api/tournament';
  EventURL: string = 'http://10.1.0.129:65410/api/event';
  betTypeURL: string = 'http://10.1.0.129:65410/api/bettype';
  marketURL: string = 'http://10.1.0.129:65410/api/market';
  BetURL: string = 'http://10.1.0.129:65410/api/bet';

  constructor(private http: HttpClient) { }

  getAllSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.sportURL);
  }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryURL);
  }

  getAllTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.TournaURL);
  }

  getAllEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(this.EventURL);
  }

  getAllBetTypes(): Observable<BetType[]> {
    return this.http.get<BetType[]>(this.betTypeURL);
  }

  getBetTypeByID(id: number): Observable<BetType> {
    return this.http.get<BetType>(this.betTypeURL + `/${id}`)
  }

  geteventByID(id: number): Observable<Events> {
    return this.http.get<Events>(this.EventURL + `/${id}`)
  }

  getAllMarkets(): Observable<Market[]> {
    return this.http.get<Market[]>(this.marketURL);
  }
  getAllBets(): Observable<Bet[]> {
    return this.http.get<Bet[]>(this.marketURL);
  }

  addBet(bet: Bet): Observable<Bet> {
    console.log(bet)
    return this.http.post<Bet>(this.BetURL, bet, httpOptions);
  }
}