import { Team } from './../../../models/team';
import { LoadingService } from './../../../services/loading.service';
import { TeamsService } from './../../../services/teams.service';
import { BaseComponent } from './../../../models/base-component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent extends BaseComponent implements OnInit {


  item: Team = new Team();
  oidChampionship: string;

  constructor( 
    private service: TeamsService,
    private loadingService:LoadingService,
    private router: Router,
    private route: ActivatedRoute) {
    
      super( "Nuevo Equipo", [
        { name: "Home", link: "/app" },
        { name:"Campeonatos",link:"/app/championships"}, 
      ] );
   }

  ngOnInit() {
    this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');
    this.breadcrumbs.push( { name:'..', link:'/app/championships/'+this.oidChampionship+ '/profile'} );
    this.breadcrumbs.push({ name: "Equipos", link: '/app/championships/'+this.oidChampionship+ '/teams' });
  }


  /**
   * 
   * @param team 
   */
  save( team:Team ){
    this.showLoading( this.loadingService );
    team.oidChampionship = this.oidChampionship;
    
    this.service.save( team ).subscribe(  
      data=>{
        this.hideLoading( this.loadingService );
        this.router.navigate(["/app","championships", this.oidChampionship, "teams"]);
      }, 
      err =>{
        this.hideLoading( this.loadingService );
        this.showErrorMessage();
      } );
  }

}
