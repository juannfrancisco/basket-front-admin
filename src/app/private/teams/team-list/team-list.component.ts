import { BaseComponent } from './../../../models/base-component';
import { LoadingService } from './../../../services/loading.service';
import { TeamsService } from './../../../services/teams.service';
import { Team } from './../../../models/team';
import { BreadcrumbItem } from './../../../models/breadcrumb-item';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent extends BaseComponent implements OnInit {
  
  elements: Team[] = []; 

  constructor(
    private service: TeamsService,
    private loadingService: LoadingService,
    private router: Router
  ) {
    super("Equipos",[
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
    this.router.navigate( ['/app','teams',team.oid, 'edit'] );
  }

}
