import { Router, ActivatedRoute } from '@angular/router';
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
  oidChampionship: string;

  constructor(
    private service: GamesService,
    private loadingService: LoadingService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super("Partidos",[
      {name:"Home",link:"/app"}, 
      {name:"Campeonatos",link:"/app/championships"}
    ]);
   }

  ngOnInit() {
    this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');
    this.breadcrumbs.push( {name:'..',link:'/app/championships/'+this.oidChampionship + "/profile" } );
    this.loadData();
  }


  loadData(){

    this.showLoading( this.loadingService );

    this.service.findAllByChampionship( this.oidChampionship ).subscribe(data => {
      this.elements = data;
      this.hideLoading( this.loadingService );

    }, err => {
      this.hideLoading( this.loadingService );
      this.showErrorMessage();
    });
    
  }

  edit(team:Team){
    this.router.navigate( ['/app', 'championships', this.oidChampionship, 'games',team.oid, 'profile'] );
  }

}
