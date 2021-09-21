import { BaseComponent } from './../../../models/base-component';
import { LoadingService } from './../../../services/loading.service';
import { TeamsService } from './../../../services/teams.service';
import { Team } from './../../../models/team';
import { BreadcrumbItem } from './../../../models/breadcrumb-item';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent extends BaseComponent implements OnInit {

  elements: Team[] = []; 
  oidChampionship: string;

  constructor(
    private service: TeamsService,
    private loadingService: LoadingService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super("Equipos",[
      {name:"Home",link:"/app"}, 
      {name:"Campeonatos",link:"/app/championships"}, 
    ]);
   }

  ngOnInit() {
    this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');
    this.breadcrumbs.push( { name:'..', link:'/app/championships/'+this.oidChampionship+ '/profile'} );
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
    this.router.navigate( ['/app','championships',this.oidChampionship,'teams',team.oid, 'profile'] );
  }  

}
