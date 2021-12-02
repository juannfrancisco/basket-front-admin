import { GameModalStatPlayerComponent } from './../game-modal-stat-player/game-modal-stat-player.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../models/player';

@Component({
  selector: 'app-game-list-players',
  templateUrl: './game-list-players.component.html',
  styleUrls: ['./game-list-players.component.css']
})
export class GameListPlayersComponent implements OnInit {



  @Input() players:Player;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }



  async viewStats(player:Player){
    
    const modalRef = this.modalService.open(GameModalStatPlayerComponent); //,{ size: 'lg' }
    modalRef.componentInstance.player = player;
    modalRef.result.then( result=>{ console.log(result) } );
  }


}
