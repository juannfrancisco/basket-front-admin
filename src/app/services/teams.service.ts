import { environment } from './../../environments/environment';
import { Team } from './../models/team';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor( private http: HttpClient ) { }


  findAll(){
    return this.http.get<Team[]>( environment.endpoint +  "teams" );
  }

  findAllByChampionship( oidChampionship:string ){
    return this.http.get<Team[]>( environment.endpoint + "championships/" + oidChampionship + "/teams" );
  }

  findById( oid:string ){
    return this.http.get<Team>( environment.endpoint +  "teams/" + oid );
  }

  deleteById( oid:string ){
    return this.http.delete( environment.endpoint +  "teams/" + oid );
  }

  save( team:Team ){
    return this.http.put( environment.endpoint +  "teams", team );
  }

  update( team:Team ){
    return this.http.post( environment.endpoint +  "teams", team );
  }

}
