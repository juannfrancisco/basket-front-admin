import { Championship } from './../../../models/championship';
import { Court } from './../../../models/court';
import { Team } from './../../../models/team';
import { TeamsService } from './../../../services/teams.service';
import { CourtsService } from './../../../services/courts.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  teams: Team[] = [];
  courts: Court[] = [];
  oidChampionship: string;

  constructor(
    private service: GamesService,
    private courtService: CourtsService,
    private teamsService: TeamsService,
    private loadingService: LoadingService,
    private router: Router,
    private route: ActivatedRoute) {

    super("Nuevo Partido", [
      { name: "Home", link: "/app" },
      { name: "Campeonatos", link: "/app/championships" },
    ]);
  }

  ngOnInit() {
    this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');
    this.breadcrumbs.push( {name:'..',link:'/app/championships/'+this.oidChampionship + "/profile" } );
    this.breadcrumbs.push( {name:'Partidos',link:'/app/championships/'+this.oidChampionship + "/games" } );
    this.loadData();
  }


  async loadData() {
    this.courts = await this.courtService.findAll().toPromise();
    this.teams = await this.teamsService.findAll().toPromise();
  }

  save(game: Game) {
    game.championship = new Championship();
    game.championship.oid = this.oidChampionship;
    this.showLoading(this.loadingService);

    this.service.save(game).subscribe(data => {
      this.hideLoading(this.loadingService);
      this.router.navigate(["/app","championships",this.oidChampionship,"games"]);
    }, error => {
      this.hideLoading(this.loadingService);
      this.showErrorMessage();
    })
  }

}
