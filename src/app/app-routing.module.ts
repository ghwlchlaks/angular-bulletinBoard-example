import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routers: Routes = [
  {path: '', component: HomeComponent, data: {animations: 'HomePage'}},
  {path: 'board', loadChildren: './contents/contents.module#ContentsModule', data: {animations: 'BoardPage'}}
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
