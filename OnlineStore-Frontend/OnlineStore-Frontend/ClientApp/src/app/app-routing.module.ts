import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppdashboardComponent} from './appdashboard/appdashboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'dashboard', component: AppdashboardComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
