import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../models/player';

@Component({
  selector: 'app-game-modal-stat-player',
  templateUrl: './game-modal-stat-player.component.html',
  styleUrls: ['./game-modal-stat-player.component.css']
})
export class GameModalStatPlayerComponent implements OnInit {

  @Input() player:Player;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {}

  close() {
    this.activeModal.close();
  }

}
