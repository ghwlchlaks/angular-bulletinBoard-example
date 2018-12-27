import { Routes, RouterModule } from '@angular/router';
import { Contents1DetailComponent } from './contents1-detail/contents1-detail.component';
import { Contents1ListComponent } from './contents1-list/contents1-list.component';

const routes: Routes = [
  { path: '', component: Contents1ListComponent, data: {animation: 'main'} },
  { path: ':id', component: Contents1DetailComponent, data: {animation: 'serve'}}
];

export const Contents1Routes = RouterModule.forChild(routes);
