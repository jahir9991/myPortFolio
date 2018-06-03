import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Router, Routes} from '@angular/router';
import {HomeComponent} from '../@pages/home/home.component';
import {AboutComponent} from '../@pages/about/about.component';
import {WorkComponent} from '../@pages/work/work.component';

const router:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'works',component:WorkComponent},
  {path:'playGround',component:WorkComponent},
  {path:'findMe',component:WorkComponent},


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule{ }
