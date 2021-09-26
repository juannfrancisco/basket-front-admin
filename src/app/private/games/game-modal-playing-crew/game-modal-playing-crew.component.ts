import { Player } from './../../../models/player';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Team } from './../../../models/team';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-modal-playing-crew',
  templateUrl: './game-modal-playing-crew.component.html',
  styleUrls: ['./game-modal-playing-crew.component.css']
})
export class GameModalPlayingCrewComponent implements OnInit {

  @Input() team: Team;
  totalSelected: number = 0;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.team.players.forEach( player=>{
      if( player.headline ){
        this.totalSelected ++;
      }
    });
  }

  close() {
    this.activeModal.close('Close click')
  }

  selectPlayer(player: Player) {
    if (this.totalSelected < 5) {
      if (player.headline) {
        player.headline = false;
        this.totalSelected--;
      } else {
        player.headline = true;
        this.totalSelected++;
      }
    } else {
      if (player.headline) {
        player.headline = false;
        this.totalSelected--;
      }
    }
  }

}
