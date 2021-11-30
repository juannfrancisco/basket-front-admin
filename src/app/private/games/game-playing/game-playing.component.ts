import { GameStat } from './../../../models/game-stat';
import { GameModalPlayingStatComponent } from './../game-modal-playing-stat/game-modal-playing-stat.component';
import { Player } from './../../../models/player';
import { GameModalPlayingCrewComponent } from './../game-modal-playing-crew/game-modal-playing-crew.component';
import { PlayersService } from './../../../services/players.service';
import { TeamsService } from './../../../services/teams.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from './../../../services/loading.service';
import { GamesService } from './../../../services/games.service';
import { Game } from './../../../models/game';
import { BaseComponent } from './../../../models/base-component';
import { Component, OnInit } from '@angular/core';
import { constants } from '../../../../environments/constants';

@Component({
  selector: 'app-game-playing',
  templateUrl: './game-playing.component.html',
  styleUrls: ['./game-playing.component.css']
})
export class GamePlayingComponent extends BaseComponent implements OnInit {

  element:Game = new Game();
  localStats: GameStat[] = [];
  visitorStats: GameStat[] = [];
  oidChampionship: string;
  gameStats:GameStat[]=[];
  players:Map<string,Player> = new Map();

  constructor(
    private service: GamesService,
    private servicePlayers: PlayersService,
    private loadingService:LoadingService,
    private modalService: NgbModal,  
    private router: Router,
    private route: ActivatedRoute) {

    super("Partido", [
      { name: "Home", link: "/app" },
      { name: "Campeonatos", link: "/app/championships" }
    ]);
  }

  ngOnInit() {
    let oidURL = this.route.snapshot.paramMap.get('id');
    this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');

    this.breadcrumbs.push( {name:'..',link:'/app/championships/'+this.oidChampionship + "/profile" } );
    this.breadcrumbs.push( {name:'Partidos',link:'/app/championships/'+this.oidChampionship + "/games" } );
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
      this.element.local.players = await this.servicePlayers.findAllByTeam( this.element.local.oid ).toPromise();
      this.element.visitor.players = await this.servicePlayers.findAllByTeam( this.element.visitor.oid ).toPromise();
      this.gameStats = await this.service.findStats( this.element.oid ).toPromise();

      this.element.local.players = this.initPlayers(this.element.local.players);
      this.element.visitor.players = this.initPlayers(this.element.visitor.players);

      /**
      this.element.local.players.forEach( player => {
        player.position = constants[player.position];
        this.players.set( player.oid, player );
      } );
      this.element.visitor.players.forEach( player => {
        player.position = constants[player.position];
        this.players.set( player.oid, player );
      } );
       */

      this.processStats();

      this.hideLoading(this.loadingService);
      this.title = this.element.local.name + " v/s " + this.element.visitor.name;
    }catch(e){
      this.hideLoading(this.loadingService);
      this.showErrorMessage();
    }
  }

   /**
   * 
   * @param players 
   */
  initPlayers(players: Player[]): Player[] {
    players.forEach(player => {
      player.position = constants[player.position];
      this.players.set( player.oid, player );
      //player.stats = new GameStatPlayer();
    });
    return players.sort((a, b) => (a.number < b.number ? -1 : 1));
  }


  processStats(){
    this.gameStats.forEach( gameStat => {
      this.processStat(gameStat);
    } );
  }

  processStat(gameStat:GameStat){
    gameStat.player = this.findPlayer( this.element[ gameStat.typeTeam.toLocaleLowerCase() ].players, gameStat.oidPlayer );
    this[gameStat.typeTeam.toLowerCase() + "Stats"].push(gameStat);
    
    if(gameStat.type == "PTS" ){
      this.PTSStats(gameStat);
    }
    if(gameStat.type == "PF" ){
      this.PFStats(gameStat);
    }
  }



  PTSStats(gameStat:GameStat){
    this.element[gameStat.typeTeam.toLocaleLowerCase()+ "Score"] = this.element[gameStat.typeTeam.toLocaleLowerCase()+ "Score"] + gameStat.value;
    //player.fouls = player.fouls? player.fouls + 1: 1;
    
  }

  PFStats(gameStat:GameStat){
    //let player = this.findPlayer( this.element[ gameStat.typeTeam.toLocaleLowerCase() ].players, gameStat.oidPlayer );
    gameStat.player.fouls = gameStat.player.fouls? gameStat.player.fouls + 1: 1;
  }

  

  findPlayer(list:Player[], oid:string){
    let playerfind:Player;
    list.forEach( player=>{ 
      if( player.oid == oid ){
        playerfind = player;
        return player;
      }
     } );
    return playerfind;
  }






  openFormacion( teamType:string ){
    const modalRef = this.modalService.open(GameModalPlayingCrewComponent); //,{ size: 'lg' }
    modalRef.componentInstance.team = this.element[teamType];
    modalRef.result.then( result=>{ console.log(result) } );
  }


  /**
   * 
   * @param player 
   * @param teamType 
   */
  optionPlayer(player:Player, teamType:string){

    const modalRef = this.modalService.open(GameModalPlayingStatComponent); //,{ size: 'lg' }
    modalRef.componentInstance.player = player;
    modalRef.componentInstance.team = this.element[teamType];
    modalRef.componentInstance.typeTeam = teamType.toUpperCase();
    modalRef.componentInstance.quarter = 1;
    modalRef.componentInstance.game = this.element;
    modalRef.result.then( result =>{
      result.player = player;
      
      if( result ){
        let value = 0;
        this[teamType+"Stats"].push(result);

        if(result["type"] == "PTS" ){
          value = result["value"];
          if(teamType== "local"){
            this.element.localScore = this.element.localScore + value;
          }else{
            this.element.visitorScore = this.element.visitorScore + value;
          }
        }
        
        if( result["type"] == "PF" ){
          player.fouls = player.fouls? player.fouls + 1: 1;
        }


      }
    });
  }

}
