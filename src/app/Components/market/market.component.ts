import { Component, OnInit } from '@angular/core';
import { Market } from 'src/app/Models/market';
import { BetType } from 'src/app/Models/betType';
import { MarketService } from 'src/app/Services/market.service';
import { BetTypeService } from 'src/app/Services/bet-type.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  betID: number;
  Bets: BetType[];
  market: Market[];
  newMarket: string = '';

  constructor(private _BetService: BetTypeService, private _MarketService: MarketService) { }

  ngOnInit() {
    this.getAllBets();
    this.getAllMarkets();
  }

  findID() {
    this.betID = +this.betID;
  }

  getAllBets(): void {
    this._BetService.getAll().subscribe(Bets => this.Bets = Bets);
    this._BetService.getAll().subscribe(Bets => console.log(Bets));
  }

  getAllMarkets(): void {
    this._MarketService.getAll().subscribe(market => this.market = market);
    this._MarketService.getAll().subscribe(market => console.log(market));
  }

  postMarket(betID: number, oddOne: number, oddTwo: number, draw: number): void {

    console.log(betID)
    if (betID == undefined || !oddOne || !oddTwo || !draw) { return; }

    this._MarketService.addMarket({ betID, oddOne, oddTwo, draw } as Market)
      .subscribe((market: Market) => {
        this.market.push(market)
      }, (error: any) => {

      });
  }

  deleteMarket(market: Market): void {
    if (confirm("Are You Sure You Want To Delete " + market.id)) {
      this._MarketService.deleteMarket(market).subscribe((market: Market[]) => {
        this.market = market
      }, (error: any) => {

      });
    }
  }

  editMarket(id: number, oddOne: number, oddTwo: number, draw: number): void {
    if (!id) { return; }
    console.log(draw)
    this._MarketService.editMarket({ id, oddOne, oddTwo, draw } as Market).subscribe((market: Market[]) => {
      this.market = market
    }, (error: any) => {

    });
  }

}
