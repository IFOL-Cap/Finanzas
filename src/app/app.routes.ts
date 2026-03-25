import { Routes } from '@angular/router';
import { ApRoutes } from './shared/consts';

export const routes: Routes = [
  {
    path: ApRoutes.im.value,
    loadChildren: () => import('./issuance-module/im.routes')
  } 
];
