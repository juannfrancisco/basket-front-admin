import { Router } from '@angular/router';
import { LoadingService } from './../../../services/loading.service';
import { BreadcrumbItem } from './../../../models/breadcrumb-item';
import { Court } from './../../../models/court';
import { CourtsService } from './../../../services/courts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-court-list',
  templateUrl: './court-list.component.html',
  styleUrls: ['./court-list.component.css']
})
export class CourtListComponent implements OnInit {

  title:string = "Canchas";
  breadcrumbs:BreadcrumbItem[] = [
    {name:"Home",link:"/app"}, 
  ];
  courts: Court[] = [];
  flagLoading = false;
  flagErrorLoading = false;

  constructor(
    private service: CourtsService,
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
      this.courts = data;
      this.flagLoading = false;
      this.loadingService.hide();
    }, err => {
      this.flagLoading = false;
      this.flagErrorLoading = true;
      this.loadingService.hide();
    });
    
  }


  edit(court:Court){
    this.router.navigate( ['/app','courts',court.oid, 'edit'] );
  }

}
