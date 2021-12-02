import { TypeTeam } from './../../../models/type-team';
import { TypeStat } from './../../../models/type-stat';
import { GameStat } from './../../../models/game-stat';
import { GamesService } from './../../../services/games.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Team } from './../../../models/team';
import { Player } from './../../../models/player';
import { Game } from './../../../models/game';
import { Component, OnInit, Input } from '@angular/core';
import { Quarter } from '../../../models/quarter';

@Component({
  selector: 'app-game-modal-playing-stat',
  templateUrl: './game-modal-playing-stat.component.html',
  styleUrls: ['./game-modal-playing-stat.component.css']
})
export class GameModalPlayingStatComponent implements OnInit {

  @Input() game: Game;
  @Input() team: Team;
  @Input() player: Player;
  @Input() typeTeam : TypeTeam;
  @Input() activeQuarter : Quarter;

  constructor(
    public activeModal: NgbActiveModal,
    public gamesService:GamesService
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.activeModal.close();
  }

  /**
   * 
   * @param num 
   * @param typeStat 
   */
  addStat(value:number, typeStat:string){
    let gameStat:GameStat = new GameStat();
    gameStat.oidPlayer = this.player.oid;
    gameStat.quarter = this.activeQuarter.number;
    gameStat.teamOid = this.team.oid;
    gameStat.type = TypeStat[typeStat];
    gameStat.typeTeam = this.typeTeam;
    gameStat.value = value;
    gameStat.quarterTimeText = this.activeQuarter.timetext;
    this.activeModal.close(gameStat);
  }

}
