import { FormGroup, FormControl, Validators } from '@angular/forms';
import { League } from './../../../models/league';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-league-form',
  templateUrl: './league-form.component.html',
  styleUrls: ['./league-form.component.css']
})
export class LeagueFormComponent implements OnInit {

  @Input() item:League;
  @Input() isLoading:boolean;
  @Output() itemEmitter = new EventEmitter<League>();
  formGroup:FormGroup;

  constructor() { }

  ngOnInit() {

    this.formGroup = new FormGroup({
      oid: new FormControl( this.item.oid ),
      name: new FormControl(this.item.name ,[ Validators.required, Validators.minLength(2)] )
    });
  }

  classFormControl(name) {
    return {
      'is-invalid': this.formGroup.get(name).invalid && this.formGroup.get(name).dirty,
      'is-valid': this.formGroup.get(name).valid
    }
  }


  save(){
    if( this.formGroup.valid ){
      let league: League = {
        oid: "",
        name: this.formGroup.get("name").value,
      };
      this.itemEmitter.emit( league );
    }
    else{
      console.log('Error en el formulario');
    }
  }

  

}
