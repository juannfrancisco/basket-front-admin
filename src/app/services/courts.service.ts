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

  findById( oid:string ){
    return this.http.get<Court>( environment.endpoint +  "courts/" + oid );
  }

  deleteById( oid:string ){
    return this.http.delete( environment.endpoint +  "courts/" + oid );
  }

  save( court:Court ){
    return this.http.put( environment.endpoint +  "courts", court );
  }

  update( court:Court ){
    return this.http.post( environment.endpoint +  "courts", court );
  }

  
}
