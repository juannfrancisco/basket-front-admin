import { Quarter } from './../../../models/quarter';
import { Component, OnInit } from '@angular/core';

import { timer, Observable, interval, Subscription } from 'rxjs';
import { take, takeWhile, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-game-clock',
  templateUrl: './game-clock.component.html',
  styleUrls: ['./game-clock.component.css']
})
export class GameClockComponent implements OnInit {


  timetext: string = "00:00:00";
  quarter: Quarter[] = [];
  stateWatch: string = "stop"
  timeInit: number = 600;
  time: number = this.timeInit;
  timer:Subscription;



  constructor() { }

  ngOnInit(): void {
  }


  /**
	 * 
	 */
  startCount() {
    if (this.stateWatch == "stop") {
      let quarter = new Quarter();
      quarter.name = (this.quarter.length + 1) + "quarter";
      quarter.points = 0;
      this.quarter.push(quarter);
    }
    if (this.timer && this.stateWatch== "play") { return; }

    this.stateWatch = "play";
    this.timer = interval(1000).pipe(takeWhile(val => this.stateWatch == "play" )).subscribe(x => {

      if (this.time > 0) {
        this.time = this.time - 1;
        var hour = Math.floor(this.time / 3600);
        var min = Math.floor(this.time / 60);
        var seconds = this.time % 60;
        this.timetext = (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min) + ":" + (seconds < 10 ? "0" + seconds : seconds);
      } else {
        this.stopQuarter();
      }
    });

  };

  stopQuarter() {

    this.stateWatch = "stop";
    if (this.timer) {
      
      this.timer.unsubscribe();
      this.timer = undefined;
    }
    this.time = this.timeInit;
    this.timetext = "00:00:00";
  }

  /**
	 * 
	 */
  pauseCount() {
    if (this.timer) {
      //this.timer.cancel(this.timer);
      this.stateWatch = "pause";
      this.timer.unsubscribe();
      this.timer = undefined;
    }
  }

}
