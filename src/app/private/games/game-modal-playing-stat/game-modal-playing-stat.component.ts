import { GameStat } from './../../../models/game-stat';
import { GamesService } from './../../../services/games.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Team } from './../../../models/team';
import { Player } from './../../../models/player';
import { Game } from './../../../models/game';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-modal-playing-stat',
  templateUrl: './game-modal-playing-stat.component.html',
  styleUrls: ['./game-modal-playing-stat.component.css']
})
export class GameModalPlayingStatComponent implements OnInit {

  @Input() game: Game;
  @Input() team: Team;
  @Input() player: Player;
  @Input() typeTeam : string;
  @Input() quarter : number;

  constructor(
    public activeModal: NgbActiveModal,
    public gamesService:GamesService
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.activeModal.close(null);
  }

  /**
   * 
   * @param num 
   * @param typeStat 
   */
  addStat(value:number, typeStat:string){
    let gameStat:GameStat = new GameStat();
    gameStat.oidPlayer = this.player.oid;
    gameStat.quarter = 1;
    gameStat.teamOid = this.team.oid;
    gameStat.type = typeStat;
    gameStat.typeTeam = this.typeTeam;
    gameStat.value = value;

    this.gamesService.saveStat(this.game.oid, gameStat).subscribe(data=>{
      console.log(data);
    }, error=>{
      alert( "Error al guardar la estadistica" + gameStat.type + gameStat.value );
    });

    this.activeModal.close(gameStat);
  }

}
