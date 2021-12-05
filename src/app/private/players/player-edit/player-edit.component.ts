import { BaseComponent } from './../../../models/base-component';
import { LoadingService } from './../../../services/loading.service';
import { PlayersService } from './../../../services/players.service';
import { Player } from './../../../models/player';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent extends BaseComponent  implements OnInit {

  item: Player = new Player();
  oidTeam : string;
  oidChampionship : string;
  oidPlayer : string;


  constructor(
    private service: PlayersService,
    private loadingService:LoadingService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    super( "Editar Jugador", [
      { name: "Home", link: "/app" },
      { name: "Equipos", link: "/app/teams" },
    ] );
  }

  ngOnInit(): void {
    this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');
    this.oidTeam = this.route.snapshot.paramMap.get('idTeam');
    this.oidPlayer = this.route.snapshot.paramMap.get('idPlayer');
    this.findById( this.oidPlayer );
  }

  /**
   * 
   * @param oidURL 
   */
  async findById( oidURL ){
    try{
      this.showLoading(this.loadingService, true);
      this.item = await this.service.findById(oidURL).toPromise();
      this.hideLoading(this.loadingService);
      this.breadcrumbs.push({ name: this.item.name, link: '/app/championships/'+this.oidChampionship+ '/teams/' + this.oidPlayer + '/profile' });

    }catch(e){
      this.hideLoading(this.loadingService);
      this.showErrorMessage();
    }
  }

  save(player:Player){

    this.showLoading( this.loadingService );
    player.oidCurrentTeam = this.oidTeam;
    player.oid = this.oidPlayer;
    this.service.update( player ).subscribe(  
      data=>{
        this.hideLoading( this.loadingService );
        this.router.navigate(["/app/championships",this.oidChampionship, "teams",this.oidTeam, "profile" ]);
      }, 
      err =>{
        this.hideLoading( this.loadingService );
        this.showErrorMessage();
      } );
  }



}
