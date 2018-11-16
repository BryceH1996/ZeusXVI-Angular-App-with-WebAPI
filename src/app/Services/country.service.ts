import { Injectable } from '@angular/core';
import { Country } from '../Models/Country';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class CountryService {

  countryURL: string = 'YourConnectionURL/api/country';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]>
  {
    return this.http.get<Country[]>(this.countryURL);
  }

  getByID(country: Country): Observable<Country>
  {
    return this.http.get<Country>(this.countryURL+ `/${country.id}`);
  }

  addCountry(country: Country): Observable<Country>
  {
    console.log(country)
    return this.http.post<Country>(this.countryURL, country, httpOptions);
  }
  
  deleteCountry(country: Country| number): Observable<Country[]>
  {
    const id = typeof country === 'number' ? country : country.id;
    console.log(id);
    return this.http.delete<Country[]>(this.countryURL + `/${id}`, httpOptions);
  }

  editCountry(country: Country): Observable<Country[]>
  {
    console.log(country);
    return this.http.put<Country[]>(this.countryURL + `/${country.id}`, country, httpOptions);
  }
}
