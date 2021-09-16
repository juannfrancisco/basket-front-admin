import { environment } from './../../environments/environment';
import { League } from './../models/league';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  constructor( private http: HttpClient ) { }


  findAll(){
    return this.http.get<League[]>( environment.endpoint +  "leagues" );
  }

  findById( oid:string ){
    return this.http.get<League>( environment.endpoint +  "leagues/" + oid );
  }

  deleteById( oid:string ){
    return this.http.delete( environment.endpoint +  "leagues/" + oid );
  }

  save( league:League ){
    return this.http.put( environment.endpoint +  "leagues", league );
  }

  update( league:League ){
    return this.http.post( environment.endpoint +  "leagues", league );
  }
}
