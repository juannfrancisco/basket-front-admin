import { GameScoreboardComponent } from './private/games/game-scoreboard/game-scoreboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { MainComponent } from './private/main/main.component';
import { HomeComponent } from './private/home/home.component';
import { NavbarComponent } from './private/common/navbar/navbar.component';
import { SidebarComponent } from './private/common/sidebar/sidebar.component';
import { UserListComponent } from './private/users/user-list/user-list.component';
import { CourtListComponent } from './private/courts/court-list/court-list.component';
import { CourtCreateComponent } from './private/courts/court-create/court-create.component';
import { PageHeaderComponent } from './private/common/page-header/page-header.component';
import { CourtFormComponent } from './private/courts/court-form/court-form.component';
import { LoadingComponent } from './private/common/loading/loading.component';
import { CourtEditComponent } from './private/courts/court-edit/court-edit.component';
import { TeamListComponent } from './private/teams/team-list/team-list.component';
import { TeamCreateComponent } from './private/teams/team-create/team-create.component';
import { TeamEditComponent } from './private/teams/team-edit/team-edit.component';
import { TeamFormComponent } from './private/teams/team-form/team-form.component';
import { TeamProfileComponent } from './private/teams/team-profile/team-profile.component';
import { PlayerCreateComponent } from './private/players/player-create/player-create.component';
import { PlayerFormComponent } from './private/players/player-form/player-form.component';
import { ChampionshipListComponent } from './private/championships/championship-list/championship-list.component';
import { GameListComponent } from './private/games/game-list/game-list.component';
import { LeagueListComponent } from './private/leagues/league-list/league-list.component';
import { LeagueFormComponent } from './private/leagues/league-form/league-form.component';
import { LeagueCreateComponent } from './private/leagues/league-create/league-create.component';
import { LeagueEditComponent } from './private/leagues/league-edit/league-edit.component';
import { GameCreateComponent } from './private/games/game-create/game-create.component';
import { GameEditComponent } from './private/games/game-edit/game-edit.component';
import { GameFormComponent } from './private/games/game-form/game-form.component';
import { GameProfileComponent } from './private/games/game-profile/game-profile.component';
import { ChampionshipCreateComponent } from './private/championships/championship-create/championship-create.component';
import { ChampionshipEditComponent } from './private/championships/championship-edit/championship-edit.component';
import { ChampionshipFormComponent } from './private/championships/championship-form/championship-form.component';
import { ChampionshipProfileComponent } from './private/championships/championship-profile/championship-profile.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GameModalFinalizeComponent } from './private/games/game-modal-finalize/game-modal-finalize.component';
import { GamePlayingComponent } from './private/games/game-playing/game-playing.component';
import { GameModalPlayingCrewComponent } from './private/games/game-modal-playing-crew/game-modal-playing-crew.component';
import { GameModalPlayingStatComponent } from './private/games/game-modal-playing-stat/game-modal-playing-stat.component';
import { GameClockComponent } from './private/games/game-clock/game-clock.component';
import { GameLineupComponent } from './private/games/game-lineup/game-lineup.component';
import { GameModalStatComponent } from './private/games/game-modal-stat/game-modal-stat.component';
import { GameModalStatPlayerComponent } from './private/games/game-modal-stat-player/game-modal-stat-player.component';
import { GameModalLogComponent } from './private/games/game-modal-log/game-modal-log.component';
import { StatsFilterPipe } from './pipes/stats-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    UserListComponent,
    CourtListComponent,
    CourtCreateComponent,
    PageHeaderComponent,
    CourtFormComponent,
    LoadingComponent,
    CourtEditComponent,
    TeamListComponent,
    TeamCreateComponent,
    TeamEditComponent,
    TeamFormComponent,
    TeamProfileComponent,
    PlayerCreateComponent,
    PlayerFormComponent,
    ChampionshipListComponent,
    GameListComponent,
    LeagueListComponent,
    LeagueFormComponent,
    LeagueCreateComponent,
    LeagueEditComponent,
    GameCreateComponent,
    GameEditComponent,
    GameFormComponent,
    GameProfileComponent,
    ChampionshipCreateComponent,
    ChampionshipEditComponent,
    ChampionshipFormComponent,
    ChampionshipProfileComponent,
    GameModalFinalizeComponent,
    GamePlayingComponent,
    GameModalPlayingCrewComponent,
    GameModalPlayingStatComponent,
    GameClockComponent,
    GameScoreboardComponent,
    GameLineupComponent,
    GameModalStatComponent,
    GameModalStatPlayerComponent,
    GameModalLogComponent,
    StatsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
