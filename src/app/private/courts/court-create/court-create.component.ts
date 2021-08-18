import { BaseComponent } from './../../../models/base-component';
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
export class CourtCreateComponent extends BaseComponent implements OnInit {

  court: Court = new Court();
  isLoading: boolean = false;

  constructor(
    private service: CourtsService,
    private loadingService: LoadingService,
    private router: Router) {

    super("Nueva Cancha",[
      { name: "Home", link: "/app" },
      { name: "Canchas", link: "/app/courts" }
    ]);

  }

  ngOnInit() {

  }


  saveCourt(court: Court) {
    this.showLoading( this.loadingService );
    this.service.save(court).subscribe(
      data => {
        this.router.navigate(["/app/courts"]);
        this.hideLoading( this.loadingService );
      },
      err => {
        this.hideLoading( this.loadingService );
        this.showErrorMessage();
      }
    );
  }


}
