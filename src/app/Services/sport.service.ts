import { Injectable } from '@angular/core';
import { Sport} from '../Models/Sport';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class SportService {

sportURL: string = 'YourConnectionURL/api/sport';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Sport[]>
  {
    return this.http.get<Sport[]>(this.sportURL);
  }

  getByID(sport: Sport): Observable<Sport>
  {
    return this.http.get<Sport>(this.sportURL+ `/${sport.id}`);
  }

  addSport(sport: Sport): Observable<Sport>
  {
    console.log(sport)
    return this.http.post<Sport>(this.sportURL, sport, httpOptions);
  }
  
  deleteSport(sport: Sport| number): Observable<Sport[]>
  {
    const id = typeof sport === 'number' ? sport : sport.id;
    console.log(id);
    return this.http.delete<Sport[]>(this.sportURL + `/${id}`, httpOptions);
  }

  editSport(sport: Sport): Observable<Sport[]>
  {
    console.log(sport);
    return this.http.put<Sport[]>(this.sportURL + `/${sport.id}`, sport, httpOptions);
  }
}