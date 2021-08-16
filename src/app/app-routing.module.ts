import { CourtCreateComponent } from './private/courts/court-create/court-create.component';
import { CourtListComponent } from './private/courts/court-list/court-list.component';
import { HomeComponent } from './private/home/home.component';
import { MainComponent } from './private/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';

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

    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
