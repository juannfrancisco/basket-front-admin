import { CourtsService } from './../../../services/courts.service';
import { Court } from './../../../models/court';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-court-create',
  templateUrl: './court-create.component.html',
  styleUrls: ['./court-create.component.css']
})
export class CourtCreateComponent implements OnInit {

  errorMsg: string = "";
  diplayError: boolean = false;

  courtForm = new FormGroup({
    oid: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    spectators: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl('')
  });


  constructor( private service: CourtsService ) { }

  ngOnInit() {
  }

  save() {
    let court: Court = {
      oid: "",
      name: this.courtForm.get("name").value,
      description: this.courtForm.get("description").value,
      spectators: this.courtForm.get("spectators").value,
      location: {
        latitude: this.courtForm.get("latitude").value,
        longitude: this.courtForm.get("longitude").value
      }
    };

    this.service.save( court ).subscribe(
      data=>{}, 
      err=>{}
    );
 
  }

}
