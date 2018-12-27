import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContentsMainComponent } from './contents/contents-main/contents-main.component';
import { ContentsAddComponent } from './contents/contents-add/contents-add.component';

const routers: Routes = [
  {path: '', component: HomeComponent},
  {path: 'board', loadChildren: './contents/contents.module#ContentsModule'}
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
