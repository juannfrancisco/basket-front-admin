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
    TeamProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
