import { GameModalStatPlayerComponent } from './../game-modal-stat-player/game-modal-stat-player.component';
import { GameModalPlayingStatComponent } from './../game-modal-playing-stat/game-modal-playing-stat.component';
import { GameModalPlayingCrewComponent } from './../game-modal-playing-crew/game-modal-playing-crew.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TypeTeam } from './../../../models/type-team';
import { GameStat } from './../../../models/game-stat';
import { Quarter } from './../../../models/quarter';
import { Game } from './../../../models/game';
import { Team } from './../../../models/team';
import { Timeout } from './../../../models/timeout';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Player } from '../../../models/player';

@Component({
  selector: 'app-game-lineup',
  templateUrl: './game-lineup.component.html',
  styleUrls: ['./game-lineup.component.css']
})
export class GameLineupComponent implements OnInit {

  @Input() team:Team;
  @Input() typeTeam:TypeTeam;
  @Input() game:Game;
  @Input() activeQuarter: Quarter;
  @Output() stats = new EventEmitter<GameStat>();



  constructor(private modalService: NgbModal) { }

  ngOnInit() { 
  }

  /**
   * 
   * @param player 
   * @param teamType 
   */
  optionPlayer(player:Player ){

    const modalRef = this.modalService.open(GameModalPlayingStatComponent); //,{ size: 'lg' }
    modalRef.componentInstance.team = this.team;
    modalRef.componentInstance.game = this.game;
    modalRef.componentInstance.player = player; 
    modalRef.componentInstance.typeTeam = this.typeTeam;
    modalRef.componentInstance.activeQuarter = this.activeQuarter;
    modalRef.result.then( data =>{
      if( data ){
        data.player = player;
        this.stats.emit( data );
      }
    });
  }

  /**
   * 
   */
  async lineup(){
    const modalRef = this.modalService.open(GameModalPlayingCrewComponent); //,{ size: 'lg' }
    modalRef.componentInstance.team = this.team;
    modalRef.result.then( result=>{ console.log(result) } );
  }


  async viewStats(player:Player){
    
    const modalRef = this.modalService.open(GameModalStatPlayerComponent); //,{ size: 'lg' }
    modalRef.componentInstance.player = player;
    modalRef.result.then( result=>{ console.log(result) } );
  }

  async timeout( ){
    let timeout = new Timeout();
    timeout.timetext = this.activeQuarter.timetext;
    this.activeQuarter[ this.typeTeam.toLowerCase() + "Timeouts"].push( new Timeout() );
  }

}

