import { Player } from './../../../models/player';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  @Input() item: Player = new Player();
  @Input() isLoading: boolean;
  @Output() itemEmitter = new EventEmitter<Player>();
  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      //oid: new FormControl(this.item.oid),
      id: new FormControl(this.item.id, [Validators.required, Validators.minLength(2)]),
      name: new FormControl(this.item.name, [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(this.item.lastName, [Validators.required, Validators.minLength(2)]),
      birthdate: new FormControl(this.item.birthdate, Validators.required),
      gender: new FormControl(this.item.gender, Validators.required),
      height: new FormControl(this.item.height, Validators.required),
      weight: new FormControl(this.item.weight, Validators.required),
      number: new FormControl(this.item.number, Validators.required),
      position: new FormControl(this.item.position, Validators.required)
    });
  }

  classFormControl(name) {
    return {
      'is-invalid': this.formGroup.get(name).invalid && this.formGroup.get(name).dirty,
      'is-valid': this.formGroup.get(name).valid
    }
  }

  save() {
    this.getFormValidationErrors();
    if (this.formGroup.valid) {
      let player = {
        oid: "",
        oidCurrentTeam: "",
        id: this.formGroup.get("id").value,
        name: this.formGroup.get("name").value,
        lastName: this.formGroup.get("lastName").value,
        birthdate: this.formGroup.get("birthdate").value,
        height: this.formGroup.get("height").value,
        weight: this.formGroup.get("weight").value,
        gender: this.formGroup.get("gender").value,
        number: this.formGroup.get("number").value,
        position: this.formGroup.get("position").value
      };
      this.itemEmitter.emit( player );
    }
  }


  getFormValidationErrors() {
    Object.keys(this.formGroup.controls).forEach(key => {
  
    const controlErrors: ValidationErrors = this.formGroup.get(key).errors;
    if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      });
    }
}