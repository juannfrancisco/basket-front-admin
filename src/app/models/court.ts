import { Location } from './location';
export interface Court {
    oid:string;
    name:string;
    description:string;
    spectators:number;
    location:Location;
}
