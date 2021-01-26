import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppdashboardComponent} from './appdashboard/appdashboard.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ProdTagComponent } from './prod-tag/prod-tag.component';
import { ProdStatusComponent } from './prod-status/prod-status.component';
import { TrademarksComponent } from './trademarks/trademarks.component';

const routes: Routes = [
  {path: 'dashboard', component: AppdashboardComponent},
  {path: 'users', component: UsersComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'vendors', component: VendorsComponent},
  {path: 'productstatus', component: ProdStatusComponent},
  {path: 'prodtags', component: ProdTagComponent},
  {path: 'trademarks', component: TrademarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
