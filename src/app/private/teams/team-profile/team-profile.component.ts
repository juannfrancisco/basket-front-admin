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

  constructor(
    private service: TeamsService,
    private servicePlayers: PlayersService,
    private loadingService:LoadingService,
    private router: Router,
    private route: ActivatedRoute) {

    super("Equipo", [
      { name: "Home", link: "/app" },
      { name: "Equipos", link: "/app/teams" }
    ]);
  }

  ngOnInit() {
    let oidURL = this.route.snapshot.paramMap.get('id');
    this.findById( oidURL );
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
    this.router.navigate( ['/app','teams',team.oid, 'edit'] );
  }
  
  remove(team:Team){
    this.router.navigate( ['/app','teams',team.oid, 'profile'] );
  }

}
