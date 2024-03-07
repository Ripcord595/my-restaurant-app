// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {MenuDetailsComponent} from "./components/menu-details/menu-details.component";
import {RestaurantsListComponent} from "./components/restaurants-list/restaurants-list.component";
import {RestaurantManageComponent} from "./components/restaurant-manage/restaurant-manage.component";
import {ItemDetailsComponent} from "./components/item-details/item-details.component";


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }, // 当URL为根路径时，重定向到'/homepage'
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // 您可以选择添加一个通配符路由来处理未找到的路径，通常会导航到一个“NotFound”页面或返回主页
  { path: 'restaurant-list', component: RestaurantsListComponent },
  { path: 'menu-details/:id', component: MenuDetailsComponent },
  { path:'item-details', component: ItemDetailsComponent},
  { path:'restaurant-manege', component:RestaurantManageComponent},
  { path: '**', redirectTo: '/homepage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
