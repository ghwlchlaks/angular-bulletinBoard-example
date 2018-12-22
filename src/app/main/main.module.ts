import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './contents/main/main.component';
import { BulletinBoardComponent } from './contents/bulletin-board/bulletin-board.component';
import { ContentsComponent } from './contents/contents.component';
import { TabComponent } from './contents/bulletin-board/tab/tab.component';
import { TabContentsComponent } from './contents/bulletin-board/tab-contents/tab-contents.component';

@NgModule({
  declarations: [SidebarComponent, MainComponent, BulletinBoardComponent, ContentsComponent, TabComponent, TabContentsComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
