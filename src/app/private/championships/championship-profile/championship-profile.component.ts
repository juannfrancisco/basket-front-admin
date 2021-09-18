import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from './../../../services/loading.service';
import { ChampionshipsService } from './../../../services/championships.service';
import { Championship } from './../../../models/championship';
import { BaseComponent } from './../../../models/base-component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship-profile',
  templateUrl: './championship-profile.component.html',
  styleUrls: ['./championship-profile.component.css']
})
export class ChampionshipProfileComponent extends BaseComponent implements OnInit {

  element:Championship = new Championship() ;
  oid:string;

  constructor(
    private service: ChampionshipsService,
    private loadingService:LoadingService,
    private router: Router,
    private route: ActivatedRoute) {

    super("Campeonato", [
      { name: "Home", link: "/app" },
      { name: "Campeonatos", link: "/app/championships" }
    ]);
  }

  ngOnInit() {
    this.oid = this.route.snapshot.paramMap.get('id');
    this.findById( this.oid );
  }

   /**
   * 
   * @param oidURL 
   */
  async findById( oidURL:string ){
    try{
      this.showLoading(this.loadingService, true);
      this.element = await this.service.findById(oidURL).toPromise();            
      this.hideLoading(this.loadingService);
      this.title = this.element.name;
    }catch(e){
      this.hideLoading(this.loadingService);
      this.showErrorMessage();
    }
  }

  goTo( view:string ){
    this.router.navigate( ['/app','championships',this.oid, view ] );
  }



}
