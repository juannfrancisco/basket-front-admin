import { ChampionshipsService } from './../../../services/championships.service';
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
    private service: ChampionshipsService,
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

  view(e:Championship){
    this.router.navigate( ['/app','championships',e.oid, 'profile'] );
  }

}
