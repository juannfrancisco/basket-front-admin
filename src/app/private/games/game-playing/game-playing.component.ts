import { TypeTeam } from './../../../models/type-team';
import { Digit } from './../../../models/digit-scoreboard';
import { Quarter } from './../../../models/quarter';
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
import { Stats } from '../../../models/stats';

@Component({
  selector: 'app-game-playing',
  templateUrl: './game-playing.component.html',
  styleUrls: ['./game-playing.component.css']
})
export class GamePlayingComponent extends BaseComponent implements OnInit {


  element: Game = new Game();
  localStats: GameStat[] = [];
  visitorStats: GameStat[] = [];
  oidChampionship: string;
  gameStats: GameStat[] = [];
  quarters: Quarter[] = [];
  activeQuarter: Quarter = {
    number: 1, name: "QT",
    localPoints: 0,
    visitorPoints: 0,
    localFouls: 0,
    visitorFouls: 0,
    state: "pause",
    localTimeouts: [],
    visitorTimeouts: [],
    timetext: "10:00"
  };
  loading: boolean;
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
    this.quarters.push(this.activeQuarter);
    this.findById( oidURL );
  }

   /**
   * 
   * @param oidURL 
   */
  async findById( oidURL ){
    try{
      this.showLoading(this.loadingService, true);
      this.element = await this.service.findById(oidURL, this.oidChampionship).toPromise();
      this.element.local.players = await this.servicePlayers.findAllByTeam( this.element.local.oid ).toPromise();
      this.element.visitor.players = await this.servicePlayers.findAllByTeam( this.element.visitor.oid ).toPromise();
      
      this.element.local.players = this.initPlayers(this.element.local.players);
      this.element.visitor.players = this.initPlayers(this.element.visitor.players);

      this.initGameStats();
 
      this.element.localScoreObj = [{ number: "0", active: false }, { number: "0", active: false }, { number: "0", active: false }];
      this.element.visitorScoreObj = [{ number: "0", active: false }, { number: "0", active: false }, { number: "0", active: false }];

      this.hideLoading(this.loadingService);
      this.title = this.element.local.name + " v/s " + this.element.visitor.name;
    }catch(e){
      this.hideLoading(this.loadingService);
      this.showErrorMessage();
    }
  }

  /**
   * 
   * @param stats 
   */
  async initGameStats() {
    let gameStats = await this.service.findStats( this.element.oid, this.oidChampionship ).toPromise();
    gameStats.forEach(stat => {
      let player:Player;
      if(stat.typeTeam == TypeTeam.LOCAL){
        player = this.element.local.players.find( player=> player.oid == stat.oidPlayer );
      }else{
        player = this.element.visitor.players.find( player=> player.oid == stat.oidPlayer );
      }
      stat.player = player;
      this.eventStatsGame(stat);
    });
  }




   /**
   * 
   * @param players 
   */
  initPlayers(players: Player[]): Player[] {
    players.forEach(player => {
      player.position = constants[player.position];
      this.players.set( player.oid, player );
      player.stats = new Stats;
    });
    return players.sort((a, b) => (a.number < b.number ? -1 : 1));
  }


  /**
   * Recibe el evento de un punto, foul etc desde el modal.
   * @param statEvent 
   */
  eventStats(statEvent: GameStat) {

    if (statEvent) {
      this.eventStatsGame( statEvent );
      this.saveStat(statEvent);
    }
  }

  saveStat( statEvent:GameStat ){
    this.service.saveStat(this.element.oid, this.oidChampionship, statEvent).subscribe( 
      data =>{
        statEvent.saved = true;
        statEvent.oid = data.oid;
        //this.showEvent( statEvent );
      }, 
      err=>{
        statEvent.saved = false;
      });
  }


  /**

  async showEvent( statEvent: GameStat){
    const toast = await this.toastController.create({
      header: `${statEvent.typeTeam}`,
      message: `${statEvent.quarterTimeText} - ${statEvent.player.name} ${statEvent.player.lastName} ( ${statEvent.value} ${statEvent.type} )`,
      duration : 1500,
      position: 'bottom',
      translucent : true,
      buttons: [
        {
          text: 'Deshacer',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

  }

   */


   /**
   * Recibe el evento de un punto, foul etc desde el modal.
   * @param statEvent 
   */
  eventStatsGame(statEvent: GameStat) {

    if (statEvent) {
      statEvent.player.stats[statEvent.type] = statEvent.player.stats[statEvent.type] + statEvent.value;
      this.gameStats.push(statEvent);
      this[statEvent.typeTeam.toLowerCase() + "Stats"].push(statEvent);

      if (statEvent.type == "PTS" || statEvent.type == "MPT") {
        statEvent.player.stats[statEvent.type + statEvent.value] = statEvent.player.stats[statEvent.type + statEvent.value] + statEvent.value;
      }

      if (statEvent.type == "PTS") {
        this.eventStatsPTS(statEvent);
      }

      if (statEvent.type == "PF") {
        this.eventStatsPF(statEvent);
      }
    }
  }

  eventStatsPTS(statEvent: GameStat) {
    let value = statEvent.value;
    if (statEvent.typeTeam.toLowerCase() == "local") {
      this.element.localScore = this.element.localScore + value;
      this.activeQuarter.localPoints = this.activeQuarter.localPoints + value;
      this.element.localScoreObj = this.toDigit(this.element.localScore);


    } else {
      this.element.visitorScore = this.element.visitorScore + value;
      this.activeQuarter.visitorPoints = this.activeQuarter.localPoints + value;

      this.element.visitorScoreObj = this.toDigit(this.element.visitorScore);
    }
  }

  eventStatsPF(statEvent: GameStat) {
    statEvent.player.fouls = statEvent.player.fouls ? statEvent.player.fouls + 1 : 1;

    if (statEvent.typeTeam.toLowerCase() == "local") {
      this.activeQuarter.localFouls = this.activeQuarter.localFouls + 1;
    }
    else {
      this.activeQuarter.visitorFouls = this.activeQuarter.visitorFouls + 1;
    }
  }

  /**
   * Convierte un integer a string con un formato de tres digitos, 
   * por ejemplo si vienen un integer 3 retorna el string "003"
   * @param num 
   */
  toDigit(num: number): Digit[] {
    let digits: Digit[] = [];
    let digitsSplit = num.toString().split('');
    let size = 3 - digitsSplit.length;
    for (var i = 0; i < size; i++) {
      digits.push({ number: "0", active: false })
    }
    digitsSplit.forEach(numStr => {
      digits.push({ number: numStr, active: true })
    });
    return digits;
  }




  eventQuarters(quarter: Quarter) {
    this.activeQuarter = quarter;
  }

}
