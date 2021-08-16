import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
    CourtCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
