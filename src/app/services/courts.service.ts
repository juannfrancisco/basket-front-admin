import { Court } from './../models/court';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourtsService {

  constructor( private http: HttpClient ) { }


  findAll(){
    return this.http.get<Court[]>( environment.endpoint +  "courts" );
  }

  save( court:Court ){
    return this.http.put( environment.endpoint +  "courts", court );
  }
}
