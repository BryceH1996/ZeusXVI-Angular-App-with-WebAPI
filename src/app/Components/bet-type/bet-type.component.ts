import { Component, OnInit } from '@angular/core';
import { BetType } from 'src/app/Models/betType';
import { Events } from 'src/app/Models/Events';
import { BetTypeService } from 'src/app/Services/bet-type.service';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-bet-type',
  templateUrl: './bet-type.component.html',
  styleUrls: ['./bet-type.component.css']
})
export class BetTypeComponent implements OnInit {

  eventID: number;
  Bets: BetType[];
  events: Events[];
  newBet: string = '';

  constructor(private _BetService: BetTypeService, private _EventService: EventService) { }

  ngOnInit() {
    this.getAllBets();
    this.getAllEvents();
  }

  findID() {
    this.eventID = +this.eventID;
  }

  getAllBets(): void {
    this._BetService.getAll().subscribe(Bets => this.Bets = Bets);
    this._BetService.getAll().subscribe(Bets => console.log(Bets));
  }

  getAllEvents(): void {
    this._EventService.getAll().subscribe(events => this.events = events);
    this._EventService.getAll().subscribe(events => console.log(events));
  }

  postBet(eventID: number, betName: string): void {
    betName = betName.trim();

    console.log(eventID)
    if (eventID == undefined || !betName) { return; }

    this._BetService.addBet({ eventID, betName } as BetType)
      .subscribe((betType: BetType) => {
        this.Bets.push(betType)
      }, (error: any) => {

      });
  }

  deleteBet(betType: BetType): void {
    if (confirm("Are You Sure You Want To Delete " + betType.betName)) {
      this._BetService.deleteBet(betType).subscribe((betType: BetType[]) => {
        this.Bets = betType
      }, (error: any) => {

      });
    }
  }

  editBet(betName: string, id: number): void {
    if (!betName) { return; }
    this._BetService.editBet({ id, betName } as BetType).subscribe((betType: BetType[]) => {
      this.Bets = betType
    }, (error: any) => {

    });
  }

}
