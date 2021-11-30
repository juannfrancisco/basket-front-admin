import { Championship } from './../../../models/championship';
import { LoadingService } from './../../../services/loading.service';
import { ChampionshipsService } from './../../../services/championships.service';
import { BaseComponent } from './../../../models/base-component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-championship-create',
  templateUrl: './championship-create.component.html',
  styleUrls: ['./championship-create.component.css']
})
export class ChampionshipCreateComponent extends BaseComponent implements OnInit {

  championship: Championship = new Championship();
  isLoading: boolean = false;

  
  constructor(
    private service: ChampionshipsService,
    private loadingService: LoadingService,
    private router: Router
  ) {
    super("Nuevo Campeonato",[
      { name: "Home", link: "/app" },
      { name: "Campeonatos", link: "/app/championships" }
    ]);
   }

  ngOnInit() {
  }

  save(championship: Championship) {
    this.showLoading( this.loadingService );
    this.service.save(championship).subscribe(
      data => {
        this.router.navigate(["/app/championships"]);
        this.hideLoading( this.loadingService );
      },
      err => {
        this.hideLoading( this.loadingService );
        this.showErrorMessage();
      }
    );
  }

}
