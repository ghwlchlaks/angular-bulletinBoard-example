import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routers: Routes = [
  {path: '', component: HomeComponent, data: {animation: 'HomePage'}},
  {path: 'board', loadChildren: './contents/contents.module#ContentsModule', data: {animation: 'BoardPage'}},
  {path: 'board1', loadChildren: './contents1/contents1.module#Contents1Module'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
