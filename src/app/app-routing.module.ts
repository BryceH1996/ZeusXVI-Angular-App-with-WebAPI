import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsComponent } from './Components/sports/sports.component';
import { HomeComponent } from './Components/home/home.component';
import { CountryComponent } from './Components/country/country.component';
import { TournamentComponent } from './Components/tournament/tournament.component';
import { EventComponent } from './Components/event/event.component';
import { BetTypeComponent } from './Components/bet-type/bet-type.component';
import { MarketComponent } from './Components/market/market.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'country', component: CountryComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: 'event', component: EventComponent },
  { path: 'bet-type', component: BetTypeComponent},
  { path: 'market', component: MarketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
