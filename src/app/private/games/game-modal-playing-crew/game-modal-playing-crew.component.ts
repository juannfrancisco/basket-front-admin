import { Team } from './../../../models/team';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-modal-playing-crew',
  templateUrl: './game-modal-playing-crew.component.html',
  styleUrls: ['./game-modal-playing-crew.component.css']
})
export class GameModalPlayingCrewComponent implements OnInit {

  @Input() team:Team;

  constructor() { }

  ngOnInit(): void {
  }

}
