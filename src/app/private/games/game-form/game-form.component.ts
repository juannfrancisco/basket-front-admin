import { Court } from './../../../models/court';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Game } from './../../../models/game';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Team } from '../../../models/team';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @Input() item:Game;
  @Input() isLoading:boolean;
  @Input() teams : Team[];
  @Input() courts : Court[];
  @Output() itemEmitter = new EventEmitter<Game>();
  
  formGroup:FormGroup;

  model: NgbDateStruct;
  date: {year: number, month: number};
  time = {hour: 13, minute: 30};

  dateObject:Date = new Date();

  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {

    this.formGroup = new FormGroup({
      oid: new FormControl( this.item.oid ),
      datex: new FormControl(this.model,Validators.required ),
      time: new FormControl( this.time, Validators.required ),
      visitor:new FormControl( this.item.visitor, Validators.required ),
      local:new FormControl( this.item.local, Validators.required ),
      court:new FormControl( this.item.court, Validators.required )
    });

    this.model = this.calendar.getToday();

  }

  classFormControl(name) {
    return {
      'is-invalid': this.formGroup.get(name).invalid && this.formGroup.get(name).dirty,
      'is-valid': this.formGroup.get(name).valid
    }
  }


  save(){
    if( this.formGroup.valid ){

      this.dateObject.setMonth(this.model.month - 1 );
      this.dateObject.setFullYear(this.model.year);
      this.dateObject.setDate(this.model.day);
      this.dateObject.setHours( this.time.hour, this.time.minute );

      
      let game: Game = new Game();
      game.date = this.dateObject;
      game.court = this.formGroup.get("court").value;
      game.local = this.formGroup.get("local").value;
      game.visitor = this.formGroup.get("visitor").value;
      this.itemEmitter.emit( game );
    }
    else{
      console.log('Error en el formulario');
    }
  }



}
