import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { MenuDetailsComponent } from './components/menu-details/menu-details.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {ReactiveFormsModule} from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatIcon} from "@angular/material/icon";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { RestaurantManageComponent } from './components/app-restaurant/restaurant-manage/restaurant-manage.component';
import { AddItemComponent } from './components/app-restaurant/add-item/add-item.component';
import {MatFormField, MatLabel} from "@angular/material/form-field";


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
    MatRadioGroup,
    MatDialogModule,
    MatIcon,
    MatRadioButton,
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardModule,
    MatLabel,
    MatFormField
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
