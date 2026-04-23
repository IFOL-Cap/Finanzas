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
    path: ApRoutes.emision.path.cotizacion.full(),
    loadComponent: () =>
      import('./emision/pages/cotizacion-page/cotizacion-page.component').then((a) => a.CotizacionPageComponent),
  },
  {
    path: ApRoutes.emision.path.emision.full(),
    loadComponent: () =>
      import('./emision/pages/emision-page/emision-page.component').then((a) => a.EmisionPageComponent),
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
    path: ApRoutes.garantias.path.busquedaGeneral.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./garantias/pages/busqueda-general-page/busqueda-general-page.component').then(
        (m) => m.BusquedaGeneralPageComponent,
      ),
  },
  {
    path: ApRoutes.garantias.path.catalogo.path.consumoGarantias.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./garantias/pages/catalogos/consumo-garantias-page/consumo-garantias-page.component').then(
        (m) => m.ConsumoGarantiasPageComponent,
      ),
  },
  {
    path: ApRoutes.garantias.path.catalogo.path.tiposGarantias.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./garantias/pages/catalogos/tipos-garantias-page/tipos-garantias-page.component').then(
        (m) => m.TiposGarantiasPageComponent,
      ),
  },
  {
    path: ApRoutes.garantias.path.catalogo.path.subtiposGarantias.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./garantias/pages/catalogos/subtipo-garantias-page/subtipo-garantias-page.component').then(
        (m) => m.SubtipoGarantiasPageComponent,
      ),
  },
  {
    path: ApRoutes.garantias.path.catalogo.path.tiposBienMueble.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./garantias/pages/catalogos/tipo-bien-mueble-page/tipo-bien-mueble-page.component').then(
        (m) => m.TipoBienMueblePageComponent,
      ),
  },
  {
    path: ApRoutes.garantias.path.catalogo.path.altaTerceros.full(),
    canActivate: [authGuard],
    loadComponent: () =>
      import('./garantias/pages/catalogos/alta-tercero-page/alta-tercero-page.component').then(
        (m) => m.AltaTerceroPageComponent,
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
