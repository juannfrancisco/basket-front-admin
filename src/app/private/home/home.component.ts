import { LoadingService } from './../../services/loading.service';
import { BaseComponent } from './../../models/base-component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor( 
    private loadingService:LoadingService,
    private router: Router
  ) {
    super( "Dashboard", [
      { name: "Home", link: "/app" },
    ] );
   }

  ngOnInit() {
  }

}
