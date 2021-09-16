import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from './../../../services/loading.service';
import { GamesService } from './../../../services/games.service';
import { Game } from './../../../models/game';
import { BaseComponent } from './../../../models/base-component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-profile',
  templateUrl: './game-profile.component.html',
  styleUrls: ['./game-profile.component.css']
})
export class GameProfileComponent extends BaseComponent implements OnInit {

  element:Game = new Game() ;

  constructor(
    private service: GamesService,
    private loadingService:LoadingService,
    private router: Router,
    private route: ActivatedRoute) {

    super("Partido", [
      { name: "Home", link: "/app" },
      { name: "Partidos", link: "/app/games" }
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
      this.element = await this.service.findById(oidURL).toPromise();            
      this.hideLoading(this.loadingService);
      this.title = this.element.local.name + " vs " + this.element.visitor.name;
    }catch(e){
      this.hideLoading(this.loadingService);
      this.showErrorMessage();
    }
  }

}
