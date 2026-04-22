import { Routes } from '@angular/router';
import { ApRoutes } from './shared/consts';
import { authGuard } from './shared/guards/auth.guard';
import { guestGuard } from './shared/guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: ApRoutes.login.value,
    pathMatch: 'full',
  },
  {
    path: ApRoutes.login.value,
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
    canActivate: [guestGuard],
    pathMatch: 'full',
  },
  {
    path: ApRoutes.im.value,
    canActivate: [authGuard],
    loadChildren: () => import('./issuance-module/im.routes'),
  },
  {
    path: ApRoutes.rn.value,
    loadChildren: () => import('./refNeg-module/rn.routes'),
  },
  {
    path: ApRoutes.administracion.path.perfiles.full(),
    loadComponent: () =>
      import('./admin/pages/admin-profile-page/admin-profile-page.component').then((a) => a.AdminProfilePageComponent),
  },
  {
    path: ApRoutes.administracion.path.menu.full(),
    loadComponent: () =>
      import('./admin/pages/admin-menu-page/admin-menu-page.component').then((a) => a.AdminMenuPageComponent),
  },
  {
    path: ApRoutes.garantias.path.catalogo.path.altaTerceros.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./garantia/catalogo/alta-terceros/alta-terceros.component').then(
        (m) => m.AltaTercerosComponent,
      ),
  },
  {
    path: ApRoutes.garantias.path.consultas.path.garantiaPoliza.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./consultas/garantias-poliza/garantias-poliza.component').then(
        (m) => m.GarantiasPolizaComponent,
      ),
  },
 /* {
    path: ApRoutes.catalogos.value,
    loadChildren: () =>
      import('./shared/components/consulting-template/pages/consulting.routes'),
  },*/
  {
    path: ApRoutes.garantias.path.step1.full(),
    loadChildren: () => import('./garantias-alta/garantias.routes'),
  },
  {
    path: ApRoutes.catalogos.path.step1.full(),
    loadChildren: () => import('./catalogos/catalogos.routes'),
  },
  {
    path: ApRoutes.garantias.path.consultas.path.personas.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./consultas/personas/personas.component').then(
        (m) => m.PersonasComponent,
      ),
  },
  {
    path: ApRoutes.garantias.path.consultas.path.envioPoliza.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./consultas/envio-poliza/envio-poliza.component').then(
        (m) => m.EnvioPolizaComponent,
      ),
  },
  {
    path: ApRoutes.garantias.path.consultas.path.solicitudes.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./consultas/solicitudes/solicitudes.component').then(
        (m) => m.SolicitudesComponent,
      ),
  },
  {
    path: ApRoutes.garantias.path.consultas.path.consultaXml.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./consultas/consulta-xml/consulta-xml.component').then(
        (m) => m.ConsultaXmlComponent,
      ),
  },
  {
    path: ApRoutes.garantias.path.refNeg.path.personas.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./ref-neg/personas/personas.component').then(
        (m) => m.PersonasComponent,
      ),
  },

  {
    path: ApRoutes.garantias.path.refNeg.path.palabrasExcluir.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./refNeg-module/pages/rn-accordion-excluded-words-data/rn-accordion-excluded-words-data.component').then(
        (rn) => rn.RnAccordionExcludedWordsDataComponent,
      ),
  },
  {
    path: ApRoutes.garantias.path.refNeg.path.causaRefNeg.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./refNeg-module/pages/rn-accordion-cause-data/rn-accordion-cause-data.component').then(
        (rn) => rn.RnAccordionCauseDataComponent,
      ),
  },
  {
    path: ApRoutes.garantias.path.refNeg.path.subCausaRefNeg.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./refNeg-module/pages/rn-accordion-sub-cause-data/rn-accordion-sub-cause-data.component').then(
        (rn) => rn.RnAccordionSubCauseDataComponent,
      ),
  },
/*{
    path: ApRoutes.catalogos.path.step1.full(),
    loadComponent: () =>
      import('./shared/components/consulting-template/pages/consulting.routes.ts').then(
        (ct) => ct.CatalogosTableLayoutComponent,
      ),
  },*/
  {
    path: '**',
    redirectTo: ApRoutes.login.value,
  },
];
