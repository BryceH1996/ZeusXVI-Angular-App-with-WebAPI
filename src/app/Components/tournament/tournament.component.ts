import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/Models/Tournament';
import { TournamentService } from 'src/app/Services/tournament.service';
import { CountryService } from 'src/app/Services/country.service';
import { Country } from 'src/app/Models/Country';
import { Sport } from 'src/app/Models/Sport';
import { SportService } from 'src/app/Services/sport.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {


  sportID: number;
  countryID: number;
  Tour: Tournament[];
  Countries: Country[];
  SportCountry: Country[];
  Sports: Sport[];
  newSport: string = '';

  constructor(private sportService: SportService, private countryService: CountryService, private tournaService: TournamentService) { }

  ngOnInit() {
    this.getAllTour()
    this.getAllSports();
    this.getAllCountries();
  }

  findSportID() {
    this.sportID = +this.sportID;
    var sportID = this.sportID;
    this.SportCountry = [];
    for (var i = 0; i < this.Countries.length; i++) {
      if (this.Countries[i].sportID == sportID) {
        this.SportCountry.push(this.Countries[i]);
      }
    }

    console.log(this.SportCountry)
    console.log(sportID)
  }

  findCountryID() {
    this.countryID = +this.countryID;
    console.log(this.countryID)
  }

  getAllSports(): void {
    this.sportService.getAll().subscribe(Sports => this.Sports = Sports);
    this.sportService.getAll().subscribe(Sports => console.log(Sports));
  }

  getAllCountries(): void {
    this.countryService.getAll().subscribe(Country => this.Countries = Country);
    this.countryService.getAll().subscribe(Country => console.log(Country));
  }

  getAllTour(): void {
    this.tournaService.getAll().subscribe(Tours => this.Tour = Tours);
    this.tournaService.getAll().subscribe(Tours => console.log(Tours));
  }

  postTour(tournamentName: string, sportID: number, countryID: number): void {
    if (!tournamentName || sportID == undefined || countryID == undefined) { return; }
    this.tournaService.addTour({ tournamentName, sportID, countryID } as Tournament).subscribe((tour: Tournament) => {
      this.Tour.push(tour)
    }, (error: any) => {

    });
  }

  deleteTour(tour: Tournament): void {
    if (!tour) { return; }
    if (confirm("Are You Sure You Want To Delete " + tour.tournamentName)) {
      this.tournaService.deleteTour(tour).subscribe((tour: Tournament[]) => {
        this.Tour = (tour)
      }, (error: any) => {

      });
    }
  }

  editTour(tournamentName: string, id: number): void {
    if (!tournamentName) { return; }
    this.tournaService.editTour({ id, tournamentName } as Tournament).subscribe((tour: Tournament[]) => {
      this.Tour = (tour)
    }, (error: any) => {

    });
  }

}
