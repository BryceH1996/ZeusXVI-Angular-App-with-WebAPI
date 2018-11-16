import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/Service/sport.service';
import { Sport } from 'src/app/Model/Sport';
import { Country } from 'src/app/Model/Country';
import { Tournament } from 'src/app/Model/Tournament';
import { Events } from 'src/app/Model/Events';
import { BetType } from 'src/app/Model/betType';
import { UserService } from 'src/app/Service/user.service';
import { User } from 'src/app/Model/User';
import { Market } from 'src/app/Model/market';
import { Bet } from 'src/app/Model/bet';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Sports: Sport[];
  Countries: Country[];
  Tour: Tournament[];
  Events: Events[];
  BetType: BetType[];
  Bets: Bet[];
  CountryTemp: Country[];
  TournamentTemp: Tournament[];
  EventTemp: Events[];
  BetTypeTemp: BetType[];
  Users: User[];
  User: User;
  userID: number;
  loggedIn: boolean = false;
  register: boolean = false;
  login: boolean = false;
  marketShow: boolean = false;
  betID: number;
  Markets: Market[];
  TempMarket: Market[];
  TempBetType: BetType;
  amount: number;
  stack: number;
  bettypeID: number;
  eventID: number;


  constructor(private _sportService: SportService, private _userService: UserService) { }

  ngOnInit() {
    this.getSports();
    this.getCountries();
    this.getAllTour();
    this.getAllEvents();
    this.getAllBetTypes();
    this.getAllUsers();
    this.getAllMarkets()
    this.getAllBets()
  }

  findBySportID(sportID: number) {
    sportID = +sportID;
    this.CountryTemp = [];
    for (var i = 0; i < this.Countries.length; i++) {
      if (this.Countries[i].sportID == sportID) {
        this.CountryTemp.push(this.Countries[i]);
      }
    }
  }

  findByCountryID(countryID: number) {
    countryID = +countryID;
    this.TournamentTemp = [];
    for (var i = 0; i < this.Tour.length; i++) {
      if (this.Tour[i].countryID == countryID) {
        this.TournamentTemp.push(this.Tour[i]);
      }
    }
  }

  findByTourID(tourID: number) {
    tourID = +tourID;
    this.EventTemp = [];
    for (var i = 0; i < this.Events.length; i++) {
      if (this.Events[i].tournamentID == tourID) {
        this.EventTemp.push(this.Events[i]);
      }
    }
  }

  findByEventID(eventID: number) {
    eventID = +eventID;
    this.BetTypeTemp = [];
    for (var i = 0; i < this.BetType.length; i++) {
      if (this.BetType[i].eventID == eventID) {
        this.BetTypeTemp.push(this.BetType[i]);
      }
    }
  }


  findByBetID(betID: number) {
    betID = +betID;
    this.bettypeID = betID
    this.TempMarket = [];
    for (var i = 0; i < this.Markets.length; i++) {
      if (this.Markets[i].betID == betID) {
        this.TempMarket.push(this.Markets[i]);
      }
    }
  }

  getSports(): void {
    this._sportService.getAllSports().subscribe(Sports => this.Sports = Sports)
    // this._sportService.getAllSports().subscribe(Sports => console.log(Sports));
  }

  getCountries(): void {
    this._sportService.getAllCountries().subscribe(Country => this.Countries = Country);
    // this._sportService.getAllCountries().subscribe(Country => console.log(Country));
  }

  getAllTour(): void {
    this._sportService.getAllTournaments().subscribe(Tours => this.Tour = Tours);
    // this._sportService.getAllTournament().subscribe(Tours => console.log(Tours));
  }
  getAllEvents(): void {
    this._sportService.getAllEvents().subscribe(E => this.Events = E)
  }

  getAllBetTypes(): void {
    this._sportService.getAllBetTypes().subscribe(b => this.BetType = b)
  }

  getAllMarkets(): void {
    this._sportService.getAllMarkets().subscribe(m => this.Markets = m, () => null, () => this.findByBetID(this.bettypeID))
  }

  getAllUsers(): void {
    this._userService.getAllUsers().subscribe(u => this.Users = u)
  }

  getAllBets(): void {
    this._sportService.getAllBets().subscribe(b => this.Bets = b)
  }

  getUser(userName: string, password: string): void {
    this._userService.getUser(userName, password).subscribe(u => this.User = u, () => null, () => {
      if (this.User != null) {
        this.userID = this.User.id;
        this.loggedIn = !this.loggedIn;
        this.register = false;
        this.loggedIn = false;
        this.login = true
      }
      else if (this.User == null) {
        alert("Incorrect username or password");
      }
    });
  }

  postUser(userName: string, password: string): void {
    this._userService.addUser({ userName, password } as User).subscribe(() => null, () => alert("Username exists"), () => this.getUser(userName, password));
  }

  toggleLogin() {
    this.loggedIn = !this.loggedIn;
    this.register = false;
  }
  toggleRegister() {
    this.register = !this.register;
    this.loggedIn = false;
  }

  toggleMarket() {
    this.marketShow = !this.marketShow;
  }
  StakeTaken(stake: number, odds: number) {
    stake = +stake;
    this.stack = stake;
    this.amount = stake + stake * odds;
  }

  postBet(amount: number, marketID: number) {
    debugger;
    console.log(amount)
    console.log(marketID)
    for (var i = 0; i < this.Markets.length; i++) {
      if (this.Markets[i].betID == this.bettypeID) {
        this._sportService.getBetTypeByID(this.bettypeID).subscribe(m => this.TempBetType = m, () => null, () => {
          this.eventID = this.TempBetType.eventID});

          if (this.User.balance < this.stack) {
            alert("Not enough fund!");
          }
          else if (this.amount == this.stack) {
            alert("No Odd Selected!");
          }
          else {
            debugger;
            var eventID = this.eventID;
            var userID = this.User.id;
            this.User.balance -= this.stack;
            console.log(this.User.balance)

            this._sportService.addBet({ amount, userID, eventID, marketID } as Bet).subscribe(bet => this.Bets.push(bet), () => null);

            var userDet: User = {
              id: this.User.id, userName: this.User.userName, password: this.User.password, balance: this.User.balance
            }

            this._userService.updateUser(this.User).subscribe(() => this.User = userDet);
          }        
      }
    }
  }

  logout() {
    this.User = new User();
    this.login = false;
  }
}

