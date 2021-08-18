import { BaseComponent } from './../../../models/base-component';
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
export class CourtListComponent extends BaseComponent implements OnInit {

  elements: Court[] = [];

  constructor(
    private service: CourtsService,
    private loadingService: LoadingService,
    private router: Router
  ) {

    super("Canchas",
      [
        { name: "Home", link: "/app" },
      ]
    );

  }

  ngOnInit() {
    this.loadData();

  }

  /**
   * 
   */
  loadData() {

    this.showLoading(this.loadingService);

    this.service.findAll().subscribe(data => {
      this.elements = data;
      this.hideLoading(this.loadingService);
    }, err => {
      this.hideLoading(this.loadingService);
      this.showErrorMessage();
    });

  }


  edit(court: Court) {
    this.router.navigate(['/app', 'courts', court.oid, 'edit']);
  }

}
