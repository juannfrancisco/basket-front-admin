import { CourtsService } from './../../../services/courts.service';
import { LoadingService } from './../../../services/loading.service';
import { BaseComponent } from './../../../models/base-component';
import { Championship } from './../../../models/championship';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-championship-list',
  templateUrl: './championship-list.component.html',
  styleUrls: ['./championship-list.component.css']
})
export class ChampionshipListComponent extends BaseComponent implements OnInit {

  elements: Championship[] = [];


  constructor(
    private service: CourtsService,
    private loadingService: LoadingService,
    private router: Router
  ) { 
    super("Campeonatos",
      [
        { name: "Home", link: "/app" },
      ]
    );
  }

  ngOnInit() {
  }

}
