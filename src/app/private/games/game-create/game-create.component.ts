import { Router } from '@angular/router';
import { LoadingService } from './../../../services/loading.service';
import { GamesService } from './../../../services/games.service';
import { Game } from './../../../models/game';
import { BaseComponent } from './../../../models/base-component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent extends BaseComponent implements OnInit {

  item: Game = new Game();

  constructor( 
    private service: GamesService,
    private loadingService:LoadingService,
    private router: Router) {
    
      super( "Nuevo Partido", [
        { name: "Home", link: "/app" },
        { name: "Partidos", link: "/app/games" },
      ] );
   }

  ngOnInit() {
  }

}
