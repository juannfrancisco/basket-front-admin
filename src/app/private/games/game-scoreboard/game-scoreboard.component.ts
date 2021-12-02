import { GameStat } from './../../../models/game-stat';
import { Quarter } from './../../../models/quarter';
import { Game } from './../../../models/game';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-scoreboard',
  templateUrl: './game-scoreboard.component.html',
  styleUrls: ['./game-scoreboard.component.css']
})
export class GameScoreboardComponent implements OnInit {

  @Input() game:Game;
  @Input() quarters: Quarter[];
  @Input() activeQuarter:Quarter;
  @Input() gameStats:GameStat[];

  @Output() events = new EventEmitter<Quarter>();

  constructor() { }

  ngOnInit() {}


  eventQuarters(quarter: Quarter) {
    this.activeQuarter = quarter;
    this.events.emit( quarter );
  }
}
