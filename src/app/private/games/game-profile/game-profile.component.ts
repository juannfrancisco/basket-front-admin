import { Championship } from './../../../models/championship';
import { GameModalFinalizeComponent } from './../game-modal-finalize/game-modal-finalize.component';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from './../../../services/loading.service';
import { GamesService } from './../../../services/games.service';
import { Game } from './../../../models/game';
import { BaseComponent } from './../../../models/base-component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-game-profile',
  templateUrl: './game-profile.component.html',
  styleUrls: ['./game-profile.component.css']
})
export class GameProfileComponent extends BaseComponent implements OnInit {

  element:Game = new Game() ;
  oidChampionship: string;

  constructor(
    private service: GamesService,
    private loadingService:LoadingService,
    private modalService: NgbModal,  
    private router: Router,
    private route: ActivatedRoute) {

    super("Partido", [
      { name: "Home", link: "/app" },
      { name: "Campeonatos", link: "/app/championships" }
    ]);
  }

  ngOnInit() {
    let oidURL = this.route.snapshot.paramMap.get('id');
    this.oidChampionship = this.route.snapshot.paramMap.get('idChampionship');

    this.breadcrumbs.push( {name:'..',link:'/app/championships/'+this.oidChampionship + "/profile" } );
    this.breadcrumbs.push( {name:'Partidos',link:'/app/championships/'+this.oidChampionship + "/games" } );
    this.findById( oidURL );
  }

   /**
   * 
   * @param oidURL 
   */
  async findById( oidURL ){
    try{
      this.showLoading(this.loadingService, true);
      this.element = await this.service.findById(oidURL, this.oidChampionship).toPromise();            
      this.hideLoading(this.loadingService);
      this.title = this.element.local.name + " vs " + this.element.visitor.name;
    }catch(e){
      this.hideLoading(this.loadingService);
      this.showErrorMessage();
    }
  }

  finalize(){
    const modalRef = this.modalService.open(GameModalFinalizeComponent); //,{ size: 'lg' }
    modalRef.componentInstance.local = this.element.local;
    modalRef.componentInstance.visitor = this.element.visitor;
    modalRef.componentInstance.game = this.element;
  }

}
