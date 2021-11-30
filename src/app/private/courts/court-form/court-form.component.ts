import { Court } from './../../../models/court';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-court-form',
  templateUrl: './court-form.component.html',
  styleUrls: ['./court-form.component.css']
})
export class CourtFormComponent implements OnInit {

  @Input() court:Court;
  @Input() isLoading:boolean;
  @Output() itemCourt = new EventEmitter<Court>();
  courtForm:FormGroup;


  constructor() { }

  ngOnInit() {

    this.courtForm = new FormGroup({
      oid: new FormControl( this.court.oid ),
      name: new FormControl(this.court.name ,[ Validators.required, Validators.minLength(4)] ),
      description: new FormControl(this.court.description, Validators.required),
      spectators: new FormControl(this.court.spectators, Validators.required),
      latitude: new FormControl(this.court.location.latitude),
      longitude: new FormControl(this.court.location.longitude)
    });
  }

  classFormControl(name) {
    return {
      'is-invalid': this.courtForm.get(name).invalid && this.courtForm.get(name).dirty,
      'is-valid': this.courtForm.get(name).valid
    }
  }
  
  save(){
    if( this.courtForm.valid ){
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
      this.itemCourt.emit( court );
    }
    else{
      console.log('Error en el formulario');
    }
  }

}
