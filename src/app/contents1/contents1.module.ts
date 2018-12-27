import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contents1ListComponent } from './contents1-list/contents1-list.component';
import { Contents1DetailComponent } from './contents1-detail/contents1-detail.component';
import { Contents1Routes } from './contents1.routing';

@NgModule({
  declarations: [Contents1ListComponent, Contents1DetailComponent],
  imports: [
    CommonModule,
    Contents1Routes
  ]
})
export class Contents1Module { }
