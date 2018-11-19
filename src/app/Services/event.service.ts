import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Events } from '../Models/Events';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class EventService {

  EventURL: string = 'http://10.1.0.129:65410/api/event';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Events[]>
  {
    return this.http.get<Events[]>(this.EventURL);
  }

  addEvent(event: Events): Observable<Events>
  {
    console.log(event)
    return this.http.post<Events>(this.EventURL, event, httpOptions);
  }
  
  deleteEvent(event: Events| number): Observable<Events[]>
  {
    const id = typeof event === 'number' ? event : event.id;
    console.log(id);
    return this.http.delete<Events[]>(this.EventURL + `/${id}`, httpOptions);
  }

  editEvent(event: Events): Observable<Events[]>
  {
    console.log(event);
    return this.http.put<Events[]>(this.EventURL + `/${event.id}`, event, httpOptions);
  }
}
