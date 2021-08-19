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

  constructor( 
    private service: TeamsService,
    private loadingService:LoadingService,
    private router: Router,
    private route: ActivatedRoute) {

      super("Editar Equipo", [
        { name: "Home", link: "/app" },
        { name: "Equipos", link: "/app/teams" }
      ]);

   }

   ngOnInit() {
    let oidURL = this.route.snapshot.paramMap.get('id');
    this.findById( oidURL );
  }


  /**
   * 
   * @param oidURL 
   */
  async findById( oidURL ){
    try{
      this.showLoading(this.loadingService, true);
      this.item = await this.service.findById(oidURL).toPromise();
      //this.element.gender = constants[this.element.gender];
      //this.element.category = constants[this.element.category];
      this.hideLoading(this.loadingService);
      this.title = this.item.name;
    }catch(e){
      this.hideLoading(this.loadingService);
      this.showErrorMessage();
    }
  }

}
