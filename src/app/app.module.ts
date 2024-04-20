import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // 确保导入 HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { MenuDetailsComponent } from './components/menu-details/menu-details.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from "@angular/forms";

// Import Angular Material modules here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";

import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { RestaurantManageComponent } from './components/app-restaurant/restaurant-manage/restaurant-manage.component';
import { AddItemComponent } from './components/app-restaurant/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    MenuDetailsComponent,
    OrderPageComponent,
    RestaurantsListComponent,
    SignupComponent,
    ItemDetailsComponent,
    RestaurantManageComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, // 添加 HttpClientModule 到 imports 数组
    BrowserAnimationsModule, // 添加 BrowserAnimationsModule
    // 添加 Angular Material modules
    MatDialogModule,
    MatRadioModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
