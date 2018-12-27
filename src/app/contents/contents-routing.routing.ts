import { Routes, RouterModule } from '@angular/router';

import { ContentsAddComponent } from './contents-add/contents-add.component';
import { ContentsListComponent } from './contents-list/contents-list.component';
import { ContentsMainComponent } from './contents-main/contents-main.component';
import { ContentsTabsComponent } from './contents-tabs/contents-tabs.component';

const routes: Routes = [
  { path: '', component: ContentsMainComponent, data: {animation: 'HomePage'}, children: [
    { path: '', component: ContentsTabsComponent, children: [
        { path: '', component: ContentsListComponent}
      ]
    },
    { path: 'add', component: ContentsAddComponent, data: {animation: 'BoardPage'}}
  ] },
];

export const ContentsRoutingRoutes = RouterModule.forChild(routes);
