import { Router } from '@angular/router';
import { LoadingService } from './../../../services/loading.service';
import { GamesService } from './../../../services/games.service';
import { Game } from './../../../models/game';
import { Team } from './../../../models/team';
import { BaseComponent } from './../../../models/base-component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent extends BaseComponent implements OnInit {

  elements: Game[] = []; 

  constructor(
    private service: GamesService,
    private loadingService: LoadingService,
    private router: Router
  ) {
    super("Partidos",[
      {name:"Home",link:"/app"}, 
    ]);
   }

  ngOnInit() {
    this.loadData();
  }


  loadData(){

    this.showLoading( this.loadingService );

    this.service.findAll().subscribe(data => {
      this.elements = data;
      this.hideLoading( this.loadingService );

    }, err => {
      this.hideLoading( this.loadingService );
      this.showErrorMessage();
    });
    
  }

  edit(team:Team){
    this.router.navigate( ['/app','games',team.oid, 'profile'] );
  }

}
