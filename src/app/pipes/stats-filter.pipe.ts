import { TypeStat } from './../models/type-stat';
import { TypeTeam } from './../models/type-team';
import { GameStat } from './../models/game-stat';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statsFilter'
})
export class StatsFilterPipe implements PipeTransform {

  transform(data: GameStat[], quarter: number, typeTeam?:TypeTeam, typeStat?:TypeStat ): GameStat[] {

    data = data.sort((a, b) => (a.quarterTimeText.localeCompare(b.quarterTimeText)));
    data = data.sort((a, b) => (a.quarter < b.quarter ? -1 : 1));

    if (!data || !quarter || quarter == 0) {
      return data;
    }
    data = data.filter(item => item.quarter == quarter);

    if(typeTeam){
      data = data.filter(item => item.typeTeam == typeTeam);
    }

    if(typeStat){
      data = data.filter(item => item.type == typeStat);
    }
    return data;
  }

}
