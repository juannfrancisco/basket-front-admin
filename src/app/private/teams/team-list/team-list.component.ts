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
export class TeamListComponent implements OnInit {

  title:string = "Equipos";
  breadcrumbs:BreadcrumbItem[] = [
    {name:"Home",link:"/app"}, 
  ];
  teams: Team[] = [];
  flagLoading = false;
  flagErrorLoading = false;

  constructor(
    private service: TeamsService,
    private loadingService: LoadingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadData();
  }


  loadData(){

    this.flagLoading = true;
    this.loadingService.show();
    this.service.findAll().subscribe(data => {
      this.teams = data;
      this.flagLoading = false;
      this.loadingService.hide();
    }, err => {
      this.flagLoading = false;
      this.flagErrorLoading = true;
      this.loadingService.hide();
    });
    
  }

  edit(team:Team){
    this.router.navigate( ['/app','teams',team.oid, 'edit'] );
  }

}
