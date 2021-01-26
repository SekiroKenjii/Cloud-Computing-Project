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
import { CategoriesComponent } from './categories/categories.component';
import { ShowCategoryComponent } from './categories/show-category/show-category.component';
import { ManageCategoryComponent } from './categories/manage-category/manage-category.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ShowVendorComponent } from './vendors/show-vendor/show-vendor.component';
import { ManageVendorComponent } from './vendors/manage-vendor/manage-vendor.component';
import { ProdStatusComponent } from './prod-status/prod-status.component';
import { ShowProdStatusComponent } from './prod-status/show-prod-status/show-prod-status.component';
import { ManageProdStatusComponent } from './prod-status/manage-prod-status/manage-prod-status.component';
import { ProdTagComponent } from './prod-tag/prod-tag.component';
import { ManageProdTagComponent } from './prod-tag/manage-prod-tag/manage-prod-tag.component';
import { ShowProdTagComponent } from './prod-tag/show-prod-tag/show-prod-tag.component';
import { TrademarksComponent } from './trademarks/trademarks.component';
import { ShowTrademarkComponent } from './trademarks/show-trademark/show-trademark.component';
import { ManageTrademarkComponent } from './trademarks/manage-trademark/manage-trademark.component';

@NgModule({
  declarations: [
    AppComponent,
    AppdashboardComponent,
    AppasideComponent,
    AppnavComponent,
    AppfooterComponent,
    UsersComponent,
    ShowUserComponent,
    ManageUserComponent,
    CategoriesComponent,
    ShowCategoryComponent,
    ManageCategoryComponent,
    VendorsComponent,
    ShowVendorComponent,
    ManageVendorComponent,
    ProdStatusComponent,
    ShowProdStatusComponent,
    ManageProdStatusComponent,
    ProdTagComponent,
    ManageProdTagComponent,
    ShowProdTagComponent,
    TrademarksComponent,
    ShowTrademarkComponent,
    ManageTrademarkComponent
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
