import { PlayersService } from './../../../services/players.service';
import { Player } from './../../../models/player';
import { LoadingService } from './../../../services/loading.service';
import { TeamsService } from './../../../services/teams.service';
import { BaseComponent } from './../../../models/base-component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent extends BaseComponent implements OnInit {

  item: Player = new Player();
  oidTeam : string;

  constructor(
    private service: PlayersService,
    private loadingService:LoadingService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    super( "Nuevo Jugador", [
      { name: "Home", link: "/app" },
      { name: "Equipos", link: "/app/teams" },
    ] );
  }

  ngOnInit() {
    this.oidTeam = this.route.snapshot.paramMap.get('id');
  }

  save( player:Player ){
    this.showLoading( this.loadingService );
    player.oidCurrentTeam = this.oidTeam;
    this.service.save( player ).subscribe(  
      data=>{
        this.hideLoading( this.loadingService );
        this.router.navigate(["/app/teams",this.oidTeam, "profile" ]);
      }, 
      err =>{
        this.hideLoading( this.loadingService );
        this.showErrorMessage();
      } );
  }

}
