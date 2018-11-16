import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/Services/sport.service';
import { Sport } from 'src/app/Models/Sport';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  Sports: Sport[];
  newSport: string = '';

  constructor(private sports: SportService) { }

  ngOnInit() {
    this.getAllSports()
  }

  getAllSports(): void {
    this.sports.getAll().subscribe(Sports => this.Sports = Sports);
  }

  postSport(sportName: string): void {
    sportName = sportName.trim()
    if (!sportName) { return; }
    this.sports.addSport({ sportName } as Sport).subscribe((sport: Sport) => {
      this.Sports.push(sport)
    },(error:any) => {
      
    });
  }

  deleteSport(Sport: Sport): void {
    if (!Sport) { return; }
    if (confirm("Are You Sure You Want To Delete " + Sport.sportName)) {
      this.sports.deleteSport(Sport).subscribe((sport: Sport[]) => {
        this.Sports = sport;
      },(error:any) => {
        
      });
    }                                 
  }

  editSport(sportName: string, id: number): void {
    if (!sportName) { return; }
    this.sports.editSport({ id, sportName } as Sport).subscribe((sport: Sport[]) => {
      this.Sports = sport
    },(error:any) => {
      
    });
  }

}
