import { TypeTeam } from './../../../models/type-team';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Quarter } from './../../../models/quarter';
import { GameStat } from './../../../models/game-stat';
import { Component, OnInit, Input } from '@angular/core';
import { TypeScriptEmitter } from '@angular/compiler';

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
  typeStat:string;


  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.numberQuarter = this.activeQuarter.number;
  }

  close() {
    this.activeModal.close();
  }


  quarterChanged(quarter:number) {
    this.numberQuarter = quarter;
  }

  teamChanged(typeTeam:string){
    this.typeTeam = typeTeam;
  }

  typeStatChanged(typeStat:string){
    this.typeStat = typeStat;
  }

  deleteStat(stat:GameStat){
    console.log(stat);
  }

}
