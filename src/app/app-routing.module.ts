import { GameProfileComponent } from './private/games/game-profile/game-profile.component';
import { LeagueListComponent } from './private/leagues/league-list/league-list.component';
import { GameListComponent } from './private/games/game-list/game-list.component';
import { ChampionshipListComponent } from './private/championships/championship-list/championship-list.component';
import { PlayerCreateComponent } from './private/players/player-create/player-create.component';
import { TeamProfileComponent } from './private/teams/team-profile/team-profile.component';
import { TeamEditComponent } from './private/teams/team-edit/team-edit.component';
import { TeamCreateComponent } from './private/teams/team-create/team-create.component';
import { CourtCreateComponent } from './private/courts/court-create/court-create.component';
import { CourtListComponent } from './private/courts/court-list/court-list.component';
import { HomeComponent } from './private/home/home.component';
import { MainComponent } from './private/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { CourtEditComponent } from './private/courts/court-edit/court-edit.component';
import { TeamListComponent } from './private/teams/team-list/team-list.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'app', 
    component: MainComponent,
    children: [
      {path: '',component: HomeComponent},
      {path: 'courts',component: CourtListComponent},
      {path: 'courts/create',component: CourtCreateComponent},
      {path: 'courts/:id/edit',component: CourtEditComponent },

      {path: 'teams',component: TeamListComponent},
      {path: 'teams/create',component: TeamCreateComponent},
      {path: 'teams/:id/edit',component: TeamEditComponent},
      {path: 'teams/:id/profile',component: TeamProfileComponent},
      {path: 'teams/:id/players/create',component: PlayerCreateComponent},

      {path: 'championships',component: ChampionshipListComponent},

      {path: 'games',component: GameListComponent},
      {path: 'games/:id/profile',component: GameProfileComponent},

      {path: 'leagues',component: LeagueListComponent},
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
