import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournament } from '../Models/Tournament';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class TournamentService {

  TournaURL: string = 'YourConnectionURL/api/tournament';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tournament[]>
  {
    return this.http.get<Tournament[]>(this.TournaURL);
  }

  addTour(tour: Tournament): Observable<Tournament>
  {
    console.log(tour)
    return this.http.post<Tournament>(this.TournaURL, tour, httpOptions);
  }
  
  deleteTour(tour: Tournament| number): Observable<Tournament[]>
  {
    const id = typeof tour === 'number' ? tour : tour.id;
    console.log(id);
    return this.http.delete<Tournament[]>(this.TournaURL + `/${id}`, httpOptions);
  }

  editTour(tour: Tournament): Observable<Tournament[]>
  {
    console.log(tour);
    return this.http.put<Tournament[]>(this.TournaURL + `/${tour.id}`, tour, httpOptions);
  }
}
