// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component'; // 确保正确导入

const routes: Routes = [
  { path: '', component: HomepageComponent }, // 将homepage设为根路由
  // ...其他路由
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
