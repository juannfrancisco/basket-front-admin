import { Team } from './team';
import { Championship } from './championship';
import { Court } from './court';
export class Game {

    oid:string;
    date:Date;
    visitor:Team;
    local:Team;
    visitorScore:number;
    localScore:number;
    court: Court;
    referee: string;
    championship:Championship;
    state:string;
}
