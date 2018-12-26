import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule, MatTableModule, MatDialogModule, MatPaginatorModule, MatButtonModule } from '@angular/material';

import { ContentsMainComponent } from './contents-main/contents-main.component';
import { ContentsTabsComponent } from './contents-tabs/contents-tabs.component';
import { ContentsListComponent } from './contents-list/contents-list.component';
import { ContentsViewDialogComponent } from './contents-view-dialog/contents-view-dialog.component';
import { ContentsAddComponent } from './contents-add/contents-add.component';

import { ContentsRoutingRoutes } from './contents-routing.routing';

@NgModule({
  declarations: [ContentsMainComponent, ContentsTabsComponent, ContentsListComponent, ContentsViewDialogComponent, ContentsAddComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonModule,
    ContentsRoutingRoutes
  ],
  entryComponents: [ContentsViewDialogComponent]
})
export class ContentsModule { }
