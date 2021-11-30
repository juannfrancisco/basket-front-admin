import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Team } from './../../../models/team';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {


  @Input() item:Team;
  @Input() isLoading:boolean;
  @Output() itemEmitter = new EventEmitter<Team>();
  
  nameURL:string;

  formGroup:FormGroup;

  constructor() { }

  ngOnInit() {

    this.formGroup = new FormGroup({
      oid: new FormControl( this.item.oid ),
      name: new FormControl(this.item.name ,[ Validators.required, Validators.minLength(2)] ),
      alias: new FormControl(this.item.name ,[ Validators.required, Validators.minLength(3), Validators.maxLength(3)] ),
      nameURL: new FormControl(this.item.nameURL ,[ Validators.required, Validators.minLength(2)] ),
      bio: new FormControl(this.item.bio, Validators.required),
      gender: new FormControl(this.item.gender, Validators.required),
      category: new FormControl(this.item.category,Validators.required ),
      phone: new FormControl(this.item.contact.phone, Validators.required),
      email: new FormControl(this.item.contact.email, Validators.required)
    });

  }


  classFormControl(name) {
    return {
      'is-invalid': this.formGroup.get(name).invalid && this.formGroup.get(name).dirty,
      'is-valid': this.formGroup.get(name).valid
    }
  }

  test(){
    let url:string = this.item.name.toLowerCase();
    url = url.replace(/[^a-zA-Z ]/g, "");
    url = url.replace(new RegExp(" ", 'g') , "-");
    //this.item.nameURL = this.item.nameURL ? this.item.nameURL : encodeURIComponent(url);
    this.item.nameURL = encodeURIComponent(url);
    //this.nameURL = encodeURIComponent(url);
  }

  save(){
   
    if( this.formGroup.valid ){
      let team: Team = {
        oid: "",
        name: this.formGroup.get("name").value,
        alias: this.formGroup.get("alias").value,
        nameURL: this.formGroup.get("nameURL").value,
        bio: this.formGroup.get("bio").value,
        gender: this.formGroup.get("gender").value,
        category: this.formGroup.get("category").value,
        contact: {
          phone: this.formGroup.get("phone").value,
          email: this.formGroup.get("email").value
        }
      };
      this.itemEmitter.emit( team );
    }
    else{
      console.log('Error en el formulario');
    }
  }

}
