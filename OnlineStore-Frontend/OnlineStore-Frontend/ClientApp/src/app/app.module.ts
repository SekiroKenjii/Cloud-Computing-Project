import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppdashboardComponent } from './appdashboard/appdashboard.component';
import { AppasideComponent } from './appaside/appaside.component';
import { AppnavComponent } from './appnav/appnav.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { ShowUserComponent } from './users/show-user/show-user.component';
import { ManageUserComponent } from './users/manage-user/manage-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AppdashboardComponent,
    AppasideComponent,
    AppnavComponent,
    AppfooterComponent,
    UsersComponent,
    ShowUserComponent,
    ManageUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
