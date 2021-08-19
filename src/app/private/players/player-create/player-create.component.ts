import { LoadingService } from './../../../services/loading.service';
import { TeamsService } from './../../../services/teams.service';
import { BaseComponent } from './../../../models/base-component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent extends BaseComponent implements OnInit {

  constructor(
    private service: TeamsService,
    private loadingService:LoadingService,
    private router: Router
  ) { 
    super( "Nuevo Jugador", [
      { name: "Home", link: "/app" },
      { name: "Equipos", link: "/app/teams" },
    ] );
  }

  ngOnInit() {
  }

}
