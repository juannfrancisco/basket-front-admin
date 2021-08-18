import { Team } from './../../../models/team';
import { LoadingService } from './../../../services/loading.service';
import { TeamsService } from './../../../services/teams.service';
import { BaseComponent } from './../../../models/base-component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent extends BaseComponent implements OnInit {


  item: Team = new Team();

  constructor( 
    private service: TeamsService,
    private loadingService:LoadingService,
    private router: Router) {
    
      super( "Nuevo Equipo", [
        { name: "Home", link: "/app" },
        { name: "Equipos", link: "/app/teams" },
      ] );
   }

  ngOnInit() {
    
  }


  /**
   * 
   * @param team 
   */
  save( team:Team ){
    this.showLoading( this.loadingService );
    this.service.save( team ).subscribe(  
      data=>{
        this.hideLoading( this.loadingService );
        this.router.navigate(["/app/teams"]);
      }, 
      err =>{
        this.hideLoading( this.loadingService );
        this.showErrorMessage();
      } );
  }

}
