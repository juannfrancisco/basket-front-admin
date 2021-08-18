import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from './../../../services/loading.service';
import { CourtsService } from './../../../services/courts.service';
import { Court } from './../../../models/court';
import { BreadcrumbItem } from './../../../models/breadcrumb-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-court-edit',
  templateUrl: './court-edit.component.html',
  styleUrls: ['./court-edit.component.css']
})
export class CourtEditComponent implements OnInit {

  title: string = "Editar Cancha";
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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let oidURL = this.route.snapshot.paramMap.get('id');
    this.findById( oidURL );
  }


  async findById( oidURL ){
    try{
      this.showLoading();
      this.court = await this.service.findById(oidURL).toPromise();
      this.hideLoading();

    }catch(e){
      this.hideLoading();
      this.diplayError = true;
      this.errorMsg = "Ocurrio un error, favor intente mas tarde";
    }
  }

  async remove(){
    this.showLoading();
    this.service.deleteById( this.court.oid ).subscribe(
      data => {
        this.hideLoading();
        this.router.navigate(["/app/courts"]);
      }, 
      err =>{
        this.hideLoading();
        this.diplayError = true;
        this.errorMsg = "Ocurrio un error, favor intente mas tarde";
      })
  }


  /**
   * 
   * @param court 
   */
  async editCourt(court:Court){
    this.showLoading();
    this.service.update( court ).subscribe(
      data => {
        this.hideLoading();
        this.router.navigate(["/app/courts"]);
      }, 
      err =>
      {
        this.hideLoading();
        this.diplayError = true;
        this.errorMsg = "Ocurrio un error, favor intente mas tarde";
      })
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
