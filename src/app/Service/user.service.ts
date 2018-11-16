import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  userURL: string = 'http://10.1.0.129:65410/api/user';


  getAllUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(this.userURL);
  }

  getUser(username: string, password: string): Observable<User>
  {
    return this.http.get<User>(this.userURL + `/${username},${password}`);
    
  }

  addUser(user: User): Observable<User>
  {
    return this.http.post<User>(this.userURL, user, httpOptions);
  }

  updateUser(user: User): Observable<User>
  {
    return this.http.put<User>(this.userURL+`/${user.id}`, user, httpOptions);
  }
}
