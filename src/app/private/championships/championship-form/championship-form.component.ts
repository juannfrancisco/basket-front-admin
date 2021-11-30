import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Championship } from './../../../models/championship';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-championship-form',
  templateUrl: './championship-form.component.html',
  styleUrls: ['./championship-form.component.css']
})
export class ChampionshipFormComponent implements OnInit {

  @Input() championship:Championship;
  @Input() isLoading:boolean;
  @Output() itemChampionship = new EventEmitter<Championship>();
  form:FormGroup;

  constructor() { }

  ngOnInit() {

    this.form = new FormGroup({
      oid: new FormControl( this.championship.oid,[ Validators.required, Validators.minLength(4) , Validators.maxLength(36)] ),
      name: new FormControl(this.championship.name ,[ Validators.required, Validators.minLength(4)] ),
      description: new FormControl(this.championship.name ,[ Validators.required, Validators.minLength(4)] )
    });
  }


  test(){
    let url:string = this.championship.name.toLowerCase();
    url = url.replace(/[^a-zA-Z0-9 ]/g, "");
    url = url.replace(new RegExp(" ", 'g') , "-");
    this.championship.oid = encodeURIComponent(url);
  }

  classFormControl(name) {
    return {
      'is-invalid': this.form.get(name).invalid && this.form.get(name).dirty,
      'is-valid': this.form.get(name).valid
    }
  }


  save(){
    if( this.form.valid ){
      let championship: Championship = {
        oid: this.form.get("oid").value,
        name: this.form.get("name").value,
        description: this.form.get("description").value
      };
      this.itemChampionship.emit( championship );
    }
    else{
      console.log('Error en el formulario');
    }
  }

}
