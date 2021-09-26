import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Team } from './../../../models/team';
import { Player } from './../../../models/player';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-modal-playing-stat',
  templateUrl: './game-modal-playing-stat.component.html',
  styleUrls: ['./game-modal-playing-stat.component.css']
})
export class GameModalPlayingStatComponent implements OnInit {

  @Input() team: Team;
  @Input() player: Player;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.activeModal.close('Close click');
  }

  /**
   * 
   * @param num 
   * @param typeStat 
   */
  addStat(num:number, typeStat:string){

    this.activeModal.close('Close click');
  }

}
