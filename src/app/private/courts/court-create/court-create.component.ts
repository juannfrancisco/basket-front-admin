import { LoadingService } from './../../../services/loading.service';
import { BreadcrumbItem } from './../../../models/breadcrumb-item';
import { CourtsService } from './../../../services/courts.service';
import { Court } from './../../../models/court';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-court-create',
  templateUrl: './court-create.component.html',
  styleUrls: ['./court-create.component.css']
})
export class CourtCreateComponent implements OnInit {

  title: string = "Nueva Cancha";
  breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", link: "/app" },
    { name: "Canchas", link: "/app/courts" }
  ];
  errorMsg: string = "";
  diplayError: boolean = false;
  court: Court = new Court();
  isLoading:boolean = false;

  constructor(
    private service: CourtsService,
    private loadingService:LoadingService,
    private router: Router) { }

  ngOnInit() {
  }


  saveCourt(court:Court){
    this.showLoading();
    this.service.save(court).subscribe(
      data => {
        this.router.navigate(["/app/courts"]);
        this.hideLoading();
      },
      err => {
        this.diplayError = true;
        this.errorMsg = "Ocurrio un error al almacenar los datos, Por favor intente mas tarde";
        this.hideLoading();
      }
    );
  }


  showLoading(){
    this.isLoading = true;
    this.loadingService.show();
  }

  hideLoading(){
    this.isLoading = false;
    this.loadingService.hide();
  }

}
