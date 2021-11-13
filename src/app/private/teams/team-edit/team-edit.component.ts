import { Team } from './../../../models/team';
import { LoadingService } from './../../../services/loading.service';
import { TeamsService } from './../../../services/teams.service';
import { BaseComponent } from './../../../models/base-component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent extends BaseComponent implements OnInit {

  item:Team;
  oidURL :string;
  oidChampionship: string;

  constructor( 
    private service: TeamsService,
    private loadingService:LoadingService,
    private router: Router,
    private route: ActivatedRoute) {

      super("Editar",[
        {name:"Home",link:"/app"}, 
        {name:"Campeonatos",link:"/app/championships"}, 
      ]);
   }

   /**
    * 
    */
   ngOnInit() {
    this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');
    this.oidURL = this.route.snapshot.paramMap.get('id');
    this.breadcrumbs.push( { name:'..', link:'/app/championships/'+this.oidChampionship+ '/profile'} );    
    this.breadcrumbs.push({ name: "Equipos", link: '/app/championships/'+this.oidChampionship+ '/teams' });

    this.findById( this.oidURL );
  }


  /**
   * 
   * @param oidURL 
   */
  async findById( oidURL ){
    try{
      this.showLoading(this.loadingService, true);
      this.item = await this.service.findById(oidURL).toPromise();
      this.hideLoading(this.loadingService);
      this.breadcrumbs.push({ name: this.item.name, link: '/app/championships/'+this.oidChampionship+ '/teams/' + this.oidURL + '/profile' });

    }catch(e){
      this.hideLoading(this.loadingService);
      this.showErrorMessage();
    }
  }


  /**
   * 
   * @param team 
   */
  save( team:Team ){
    this.showLoading( this.loadingService );
    team.oid = this.oidURL;
    this.service.update( team ).subscribe(  
      data=>{
        this.hideLoading( this.loadingService );
        this.router.navigate(["/app", "championships",this.oidChampionship, "teams", this.oidURL,"profile" ]);
      }, 
      err =>{
        this.hideLoading( this.loadingService );
        this.showErrorMessage();
      } );
  }

}
