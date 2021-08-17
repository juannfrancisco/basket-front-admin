import { Court } from './../../../models/court';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-court-form',
  templateUrl: './court-form.component.html',
  styleUrls: ['./court-form.component.css']
})
export class CourtFormComponent implements OnInit {

  @Input() court:Court;

  courtForm = new FormGroup({
    oid: new FormControl( this.court.oid , Validators.required),
    name: new FormControl(this.court.name ,[ Validators.required, Validators.minLength(4)] ),
    description: new FormControl(this.court.description, Validators.required),
    spectators: new FormControl(this.court.spectators, Validators.required),
    latitude: new FormControl(this.court.location.latitude),
    longitude: new FormControl(this.court.location.longitude)
  });


  constructor() { }

  ngOnInit() {

  }
  
  save(){
    //if( )
  }

}
