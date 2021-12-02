import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Quarter } from './../../../models/quarter';
import { GameStat } from './../../../models/game-stat';
import { Component, OnInit, Input } from '@angular/core';
import { TypeTeam } from '../../../models/type-team';

@Component({
  selector: 'app-game-modal-log',
  templateUrl: './game-modal-log.component.html',
  styleUrls: ['./game-modal-log.component.css']
})
export class GameModalLogComponent implements OnInit {

  @Input() gameStats:GameStat[];
  @Input() activeQuarter:Quarter;
  numberQuarter:number = 0;
  typeTeam:string = TypeTeam.LOCAL;


  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.numberQuarter = this.activeQuarter.number;
  }

  close() {
    this.activeModal.close();
  }


  quarterChanged(ev: any) {
    this.numberQuarter = ev.detail.value;
    console.log('Segment changed', ev);
  }

}
