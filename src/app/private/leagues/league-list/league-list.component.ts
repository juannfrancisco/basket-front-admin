import { LeaguesService } from './../../../services/leagues.service';
import { CourtsService } from './../../../services/courts.service';
import { LoadingService } from './../../../services/loading.service';
import { BaseComponent } from './../../../models/base-component';
import { League } from './../../../models/league';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.css']
})
export class LeagueListComponent extends BaseComponent implements OnInit {

  elements: League[] = [];

  constructor(
    private service: LeaguesService,
    private loadingService: LoadingService,
    private router: Router
  ) {
    super("Ligas",
      [
        { name: "Home", link: "/app" },
      ]
    );
   }

  ngOnInit() {

    
  }

}
