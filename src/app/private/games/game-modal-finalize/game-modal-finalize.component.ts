import { Game } from './../../../models/game';
import { GamesService } from './../../../services/games.service';
import { ChampionshipsService } from './../../../services/championships.service';
import { Team } from './../../../models/team';
import { Championship } from './../../../models/championship';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-game-modal-finalize',
  templateUrl: './game-modal-finalize.component.html',
  styleUrls: ['./game-modal-finalize.component.css']
})
export class GameModalFinalizeComponent implements OnInit {

  @Input() local:Team;
  @Input() visitor:Team;
  @Input() game:Game;

  scoreVisitor:number;
  scoreLocal:number;

  constructor( 
    public activeModal: NgbActiveModal,
    private gamesService:GamesService
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.activeModal.close('Close click')
  }
  
  save(){
    let gameUpdate:Game = new Game();
    gameUpdate.oid = this.game.oid;
    gameUpdate.scoreLocal = this.scoreLocal;
    gameUpdate.scoreVisitor = this.scoreVisitor;

    this.gamesService.updateState( gameUpdate ).subscribe( 
      data=>{
        console.log( "OK" );
      },
      err=>{
        alert( "err" );
      });
  }

}
