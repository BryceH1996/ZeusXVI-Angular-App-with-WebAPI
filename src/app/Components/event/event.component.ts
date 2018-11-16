import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/Models/Events';
import { EventService } from 'src/app/Services/event.service';
import { Tournament } from 'src/app/Models/Tournament';
import { Country } from 'src/app/Models/Country';
import { Sport } from 'src/app/Models/Sport';
import { SportService } from 'src/app/Services/sport.service';
import { CountryService } from 'src/app/Services/country.service';
import { TournamentService } from 'src/app/Services/tournament.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  sportID: number;
  countryID: number;
  tournamentID: number;
  Tour: Tournament[];
  Countries: Country[];
  SportCountry: Country[];
  Tournament: Tournament[];
  Sports: Sport[];
  events: Events[];
  newSport: string = '';

  constructor(private sportService: SportService, private countryService: CountryService, private tournaService: TournamentService, private eventService: EventService) { }

  ngOnInit() {
    this.getAllSports();
    this.getAllCountries();
    this.getAllTour();
    this.getAllEvents()
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
    var countryID = this.countryID;
    this.Tournament = [];
    for (var i = 0; i < this.Tour.length; i++) {
      if (this.Tour[i].countryID == countryID) {
        this.Tournament.push(this.Tour[i]);
      }
    }

    console.log(this.Tournament)
    console.log(countryID)
  }

  findTournamentID() {
    this.tournamentID = +this.tournamentID;
    console.log(this.tournamentID)
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

  getAllEvents(): void {
    this.eventService.getAll().subscribe(E => this.events = E)
  }

  postEvents(eventName: string, tournamentID: number, date: Date): void {
    eventName = eventName.trim()
    if (!eventName || tournamentID == undefined || !date) { return; }
    this.eventService.addEvent({ eventName,tournamentID, date } as Events).subscribe((event: Events) => {
      this.events.push(event)
    }, (error: any) => {

    });
  }

  deleteEvents(event: Events): void {
    if (!event) { return; }

    if (confirm("Are You Sure You Want To Delete " + event.eventName)) {
      this.eventService.deleteEvent(event).subscribe((event: Events[]) => {
        this.events = event
      }, (error: any) => {

      });
    }
  }

  editEvents(eventName: string, id: number): void {
    if (!eventName) { return; }
    this.eventService.editEvent({ id, eventName } as Events).subscribe((event: Events[]) => {
      this.events = event
    }, (error: any) => {

    });
  }

}
