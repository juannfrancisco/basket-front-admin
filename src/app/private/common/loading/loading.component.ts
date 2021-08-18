import { LoadingService } from './../../../services/loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {


  isLoading:boolean = false;

  constructor( private service: LoadingService ) { }

  ngOnInit() {
    this.isLoading = this.service.isLoading;
  }

}
