// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {MenuDetailsComponent} from "./components/menu-details/menu-details.component";
import {RestaurantsListComponent} from "./components/restaurants-list/restaurants-list.component";
import {RestaurantManageComponent} from "./components/app-restaurant/restaurant-manage/restaurant-manage.component";


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'restaurant-list', component: RestaurantsListComponent },
  { path: 'menu-details/:id', component: MenuDetailsComponent },
  { path:'restaurant-manage', component:RestaurantManageComponent},
  { path: '**', redirectTo: '/homepage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
