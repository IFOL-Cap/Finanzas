import { Routes } from '@angular/router';
import { ApRoutes } from './shared/consts';
import { authGuard } from './shared/guards/auth.guard';
import { guestGuard } from './shared/guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: ApRoutes.login.value,
    pathMatch: 'full'
  },
  {
    path: ApRoutes.login.value,
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    canActivate: [guestGuard],
    pathMatch: 'full'
  },
  {
    path: ApRoutes.im.value,
    canActivate: [authGuard],
    loadChildren: () => import('./issuance-module/im.routes')
  },
  {
    path: ApRoutes.rn.value,
    loadChildren: () => import('./refNeg-module/rn.routes')
  },  
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(a => a.AdminComponent),
  },
  {
    path: ApRoutes.garantias.path.catalogo.path.altaTerceros.path.fisica.full(),
    canActivate: [authGuard],
    loadComponent: () => import('./garantia/catalogo/alta-terceros/alta-terceros.component').then(m => m.AltaTercerosComponent)
  },
  {
    path: ApRoutes.garantias.path.catalogo.path.altaTerceros.path.moral.full(),
    canActivate: [authGuard],
    loadComponent: () => import('./garantia/catalogo/alta-terceros.moral/alta-terceros.moral.component').then(m => m.AltaTercerosMoralComponent)
  },
  {
    path: ApRoutes.garantias.path.consultas.path.garantiaPoliza.full(),
    canActivate: [authGuard],
    loadComponent: () => import('./consultas/garantias-poliza/garantias-poliza.component').then(m => m.GarantiasPolizaComponent)
  },
  {
    path: ApRoutes.garantias.path.consultas.path.personas.full(),
    canActivate: [authGuard],
    loadComponent: () => import('./consultas/personas/personas.component').then(m => m.PersonasComponent)
  },
  {
    path: ApRoutes.garantias.path.consultas.path.envioPoliza.full(),
    canActivate: [authGuard],
    loadComponent: () => import('./consultas/envio-poliza/envio-poliza.component').then(m => m.EnvioPolizaComponent)
  },
  {
    path: ApRoutes.garantias.path.consultas.path.solicitudes.full(),
    canActivate: [authGuard],
    loadComponent: () => import('./consultas/solicitudes/solicitudes.component').then(m => m.SolicitudesComponent)
  },
  {
    path: ApRoutes.garantias.path.consultas.path.consultaXml.full(),
    canActivate: [authGuard],
    loadComponent: () => import('./consultas/consulta-xml/consulta-xml.component').then(m => m.ConsultaXmlComponent)
  },
  {
    path: ApRoutes.garantias.path.refNeg.path.personas.full(),
    canActivate: [authGuard],
    loadComponent: () => import('./ref-neg/personas/personas.component').then(m => m.PersonasComponent)
  },
  {
    path: '**',
    redirectTo: ApRoutes.login.value
  }
];
