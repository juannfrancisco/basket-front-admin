import { Player } from './../../../models/player';
import { PlayersService } from './../../../services/players.service';
import { constants } from './../../../../environments/constants';
import { LoadingService } from './../../../services/loading.service';
import { TeamsService } from './../../../services/teams.service';
import { Team } from './../../../models/team';
import { BaseComponent } from './../../../models/base-component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent extends BaseComponent implements OnInit {


  element:Team = new Team() ;
  players:Player[] = [];
  oidURL:string;
  oidChampionship: string;

  constructor(
    private service: TeamsService,
    private servicePlayers: PlayersService,
    private loadingService:LoadingService,
    private router: Router,
    private route: ActivatedRoute) {

    super("Equipo", [
      { name: "Home", link: "/app" },
      { name: "Campeonatos", link: "/app/championships" }      
    ]);
  }

  ngOnInit() {
    this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');
    this.oidURL = this.route.snapshot.paramMap.get('id');
    
    this.breadcrumbs.push( { name:'..', link:'/app/championships/'+this.oidChampionship+ '/profile'} );
    this.breadcrumbs.push({ name: "Equipos", link: '/app/championships/'+this.oidChampionship+ '/teams' });

    this.findById( this.oidURL );
  }


  /**
   * 
   * @param oidURL 
   */
  async findById( oidURL ){
    try{
      this.showLoading(this.loadingService, true);
      this.element = await this.service.findById(oidURL).toPromise();
      this.players = await this.servicePlayers.findAllByTeam(oidURL).toPromise();
      this.players.forEach( player =>{
        player.position = constants[player.position];
      } )
      this.element.gender = constants[this.element.gender];
      this.element.category = constants[this.element.category];
      this.hideLoading(this.loadingService);
      this.title = this.element.name;
    }catch(e){
      this.hideLoading(this.loadingService);
      this.showErrorMessage();
    }
  }

  edit(team:Team){
    this.router.navigate( ['/app', 'championships',this.oidChampionship, 'teams',team.oid, 'edit'] );
  }
  
  remove(team:Team){
    this.router.navigate( ['/app','teams',team.oid, 'profile'] );
  }

}
