import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPopper } from 'angular-popper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SportsComponent } from './Components/sports/sports.component';
import { SportService } from './Services/sport.service';
import { HomeComponent } from './Components/home/home.component';
import { CountryComponent } from './Components/country/country.component';
import { TournamentComponent } from './Components/tournament/tournament.component';
import { EventComponent } from './Components/event/event.component';
import { MarketComponent } from './Components/market/market.component';
import { BetTypeComponent } from './Components/bet-type/bet-type.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SportsComponent,
    HomeComponent,
    CountryComponent,
    TournamentComponent,
    EventComponent,
    MarketComponent,
    BetTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgxPopper,
    FormsModule
  ],
  providers: [SportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
