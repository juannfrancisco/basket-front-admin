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
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
