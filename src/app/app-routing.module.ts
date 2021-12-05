import { PlayerEditComponent } from './private/players/player-edit/player-edit.component';
import { ChampionshipCreateComponent } from './private/championships/championship-create/championship-create.component';
import { GamePlayingComponent } from './private/games/game-playing/game-playing.component';
import { ChampionshipProfileComponent } from './private/championships/championship-profile/championship-profile.component';
import { GameCreateComponent } from './private/games/game-create/game-create.component';
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
      {path: 'championships/create',component: ChampionshipCreateComponent},
      {path: 'championships/:id/profile',component: ChampionshipProfileComponent},
      
      {path: 'championships/:idChampionship/games',component: GameListComponent},
      {path: 'championships/:idChampionship/games/:id/profile',component: GameProfileComponent},
      {path: 'championships/:idChampionship/games/create',component: GameCreateComponent},
      {path: 'championships/:idChampionship/games/:id/playing',component: GamePlayingComponent},

      {path: 'championships/:idChampionship/teams',component: TeamListComponent},
      {path: 'championships/:idChampionship/teams/create',component: TeamCreateComponent},
      {path: 'championships/:idChampionship/teams/:id/edit',component: TeamEditComponent},
      {path: 'championships/:idChampionship/teams/:id/profile',component: TeamProfileComponent},
      {path: 'championships/:idChampionship/teams/:id/players/create',component: PlayerCreateComponent},
      {path: 'championships/:idChampionship/teams/:idTeam/players/:idPlayer/edit',component: PlayerEditComponent},





      {path: 'games',component: GameListComponent},
      {path: 'games/:id/profile',component: GameProfileComponent},
      {path: 'games/create',component: GameCreateComponent},

      {path: 'leagues',component: LeagueListComponent},
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
