import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Game } from './../../../models/game';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @Input() item:Game;
  @Input() isLoading:boolean;
  @Output() itemEmitter = new EventEmitter<Game>();
  
  formGroup:FormGroup;

  constructor() { }

  ngOnInit() {

    this.formGroup = new FormGroup({
      oid: new FormControl( this.item.oid ),
      date: new FormControl(this.item.date,Validators.required )
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
      let game: Game = new Game();
      this.itemEmitter.emit( game );
    }
    else{
      console.log('Error en el formulario');
    }
  }



}
