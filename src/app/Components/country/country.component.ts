import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/Services/country.service';
import { Country } from 'src/app/Models/Country';
import { Sport } from 'src/app/Models/Sport';
import { SportService } from 'src/app/Services/sport.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  sportID: number;
  Countries: Country[];
  Sports: Sport[];
  newSport: string = '';

  constructor(private countryService: CountryService, private sportService: SportService) { }

  ngOnInit() {
    this.getAllCountries();
    this.getAllSports();
  }

  findID() {
    this.sportID = +this.sportID;
  }

  getAllSports(): void {
    this.sportService.getAll().subscribe(Sports => this.Sports = Sports);
    this.sportService.getAll().subscribe(Sports => console.log(Sports));
  }

  getAllCountries(): void {
    this.countryService.getAll().subscribe(Country => this.Countries = Country);
    this.countryService.getAll().subscribe(Country => console.log(Country));
  }

  postCountry(sportID: number, countryName: string): void {
    countryName = countryName.trim();

    console.log(sportID)
    if (sportID == undefined || !countryName) { return; }

    this.countryService.addCountry({ sportID, countryName } as Country)
      .subscribe((country: Country) => {
        this.Countries.push(country)
      }, (error: any) => {

      });
  }

  deleteCountry(country: Country): void {
    if (confirm("Are You Sure You Want To Delete " + country.countryName)) {
      this.countryService.deleteCountry(country).subscribe((country: Country[]) => {
        this.Countries = country
      }, (error: any) => {

      });
    }
  }

  editCountry(countryName: string, id: number): void {
    if (!countryName) { return; }
    this.countryService.editCountry({ id, countryName } as Country).subscribe((country: Country[]) => {
      this.Countries = country
    }, (error: any) => {

    });
  }

}
