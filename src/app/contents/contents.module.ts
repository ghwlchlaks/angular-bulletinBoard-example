import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule, MatTableModule, MatDialogModule, MatPaginatorModule, MatButtonModule } from '@angular/material';

import { ContentsMainComponent } from './contents-main/contents-main.component';
import { ContentsTabsComponent } from './contents-tabs/contents-tabs.component';
import { ContentsListComponent } from './contents-list/contents-list.component';
import { ContentsViewDialogComponent } from './contents-view-dialog/contents-view-dialog.component';

@NgModule({
  declarations: [ContentsMainComponent, ContentsTabsComponent, ContentsListComponent, ContentsViewDialogComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  entryComponents: [ContentsViewDialogComponent]
})
export class ContentsModule { }
