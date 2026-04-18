import { ChangeDetectionStrategy, Component, ElementRef, signal, ViewChild } from '@angular/core';
//import { BreadcrumbComponent } from '../../../../drives/shared/components/core/breadcrumb/breadcrumb.component';
import { Router, RouterOutlet } from '@angular/router';
//import { CarouselComponent } from '../../../../drives/shared/components/core/carousel/carousel.component';
//import { ResumeComponent } from '../../../../drives/shared/components/core/resume/resume.component';
import { CarouselI, DataMenu, LocationSite } from '../../../interfaces';
import { StateService } from '../../../services/state.service';
import { NavbarComponent } from '../nav/navbar.component';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/work-area/menu.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { LoginService } from '../../../services/login.service';
import { ApRoutes } from '../../../consts';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { SidebarMenuItemComponent } from './sidebar-menu-item/sidebar-menu-item.component';

export interface SideBarItem {
  id: string;
  name: string;
  icon: string;
  iconActive?: string;
  path?: string;
  isActive: boolean;
  opciones?: SideBarItem[];
}

@Component({
  selector: 'app-sidebarv2',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
		NavbarComponent,
		RouterOutlet,
		MenuComponent,
		OverlayModule,
		SidebarMenuItemComponent,
	], //  , BreadcrumbComponent, CarouselComponent, ResumeComponent],
  templateUrl: './sidebarv2.component.html',
  styleUrl: './sidebarv2.component.css',
})
export class SidebarV2Component {

  isOpenSideBar = signal(false);
  sideNav: any;

  barra(isOpen: boolean): void {
    this.isOpenSideBar.set(isOpen);
  }

  public sideBarItems: SideBarItem[] = [
    {
      id: 'emision',
      name: 'Emisión',
      icon: '/assets/icons/Portafolio.svg',
      iconActive: '/assets/icons/Portafolio.svg',
      path: '/',
      isActive: false,
      opciones: [
        {
          id: 'cotizacion',
          name: 'Cotización',
          icon: '/assets/icons/menu/car.svg',
          iconActive: '/assets/icons/menu/car.svg',
          path: '/',
          isActive: false,
        },
        {
          id: 'emision-opcion',
          name: 'Emisión',
          icon: '/assets/icons/menu/Shape.svg',
          iconActive: '/assets/icons/menu/Shape.svg',
          path: '/',
          isActive: false,
        },
        {
          id: 'inicio-opcion',
          name: 'Inicio',
          icon: '/assets/icons/menu/Tablas.svg',
          iconActive: '/assets/icons/menu/Tablas.svg',
          path: '/',
          isActive: false,
        },
      ],
    },
    {
      id: 'garantias',
      name: 'Garantías',
      icon: '/assets/icons/Indicadores.svg',
      iconActive: '/assets/icons/Indicadores.svg',
      path: '/',
      isActive: false,
      opciones: [
        {
          id: 'alta-garantias',
          name: 'Alta',
          icon: '/assets/icons/menu/car.svg',
          iconActive: '/assets/icons/menu/car.svg',
          path: '/',
          isActive: false,
        },
        {
          id: 'catalogos-garantias',
          name: 'Catálogos',
          icon: '/assets/icons/menu/Shape.svg',
          iconActive: '/assets/icons/menu/Shape.svg',
          path: '/',
          isActive: false,
          opciones: [
            {
              id: 'consumo-garantias',
              name: 'Consumo de Garantías',
              icon: '/assets/icons/menu/Tablas.svg',
              iconActive: '/assets/icons/menu/Tablas.svg',
              path: ApRoutes.garantias.path.step1.full(),
              isActive: false,
            },
            {
              id: 'tipos-garantias',
              name: 'Tipos de garantías',
              icon: '/assets/icons/menu/Tablas.svg',
              iconActive: '/assets/icons/menu/Tablas.svg',
              path: ApRoutes.catalogos.path.step1.full(),
              isActive: false,
            },
            {
              id: 'subtipos-garantias',
              name: 'Subtipos de garantías',
              icon: '/assets/icons/menu/Tablas.svg',
              iconActive: '/assets/icons/menu/Tablas.svg',
              path: '/',
              isActive: false,
            },
            {
              id: 'tipos-bien-mueble',
              name: 'Tipos bien mueble',
              icon: '/assets/icons/menu/Tablas.svg',
              iconActive: '/assets/icons/menu/Tablas.svg',
              path: '/',
              isActive: false,
            },
            {
              id: 'alta-terceros',
              name: 'Alta Terceros',
              icon: '/assets/icons/menu/Tablas.svg',
              iconActive: '/assets/icons/menu/Tablas.svg',
              path: ApRoutes.garantias.path.catalogo.path.altaTerceros.path.fisica.full(),
              isActive: false,
            },
          ],
        },
      ],
    },
    {
      id: 'administracion',
      name: 'Administración',
      icon: '/assets/icons/Productos.svg',
      iconActive: '/assets/icons/Productos.svg',
      path: '/',
      isActive: false,
      opciones: [
        {
          id: 'menu-administracion',
          name: 'Menú',
          icon: '/assets/icons/menu/route.svg',
          iconActive: '/assets/icons/menu/route.svg',
          path: ApRoutes.administracion.full(),
          isActive: false,
        },
        {
          id: 'perfiles-administracion',
          name: 'Perfiles',
          icon: '/assets/icons/menu/Cliente.svg',
          iconActive: '/assets/icons/menu/Cliente.svg',
          path: ApRoutes.administracion.full(),
          isActive: false,
        },
      ],
    },
    {
      id: 'consultas',
      name: 'Consultas',
      icon: '/assets/icons/Notification-Circle-Mapfre.svg',
      iconActive: '/assets/icons/Notification-Circle-Mapfre.svg',
      path: '/',
      isActive: false,
      opciones: [
        {
          id: 'garantias-poliza',
          name: 'Garantías por Póliza',
          icon: '/assets/icons/menu/Tablas.svg',
          iconActive: '/assets/icons/menu/Tablas.svg',
          path: ApRoutes.garantias.path.consultas.path.garantiaPoliza.full(),
          isActive: false,
        },
        {
          id: 'personas-consulta',
          name: 'Personas',
          icon: '/assets/icons/menu/Cliente.svg',
          iconActive: '/assets/icons/menu/Cliente.svg',
          path: ApRoutes.garantias.path.consultas.path.personas.full(),
          isActive: false,
        },
        {
          id: 'envio-poliza',
          name: 'Envio de Póliza',
          icon: '/assets/icons/menu/Factura.svg',
          iconActive: '/assets/icons/menu/Factura.svg',
          path: ApRoutes.garantias.path.consultas.path.envioPoliza.full(),
          isActive: false,
        },
        {
          id: 'solicitudes-consulta',
          name: 'Solicitudes',
          icon: '/assets/icons/menu/BuscarPoliza.svg',
          iconActive: '/assets/icons/menu/BuscarPoliza.svg',
          path: ApRoutes.garantias.path.consultas.path.solicitudes.full(),
          isActive: false,
        },
        {
          id: 'consulta-poliza',
          name: 'Consulta de Póliza',
          icon: '/assets/icons/menu/BuscarPoliza.svg',
          iconActive: '/assets/icons/menu/BuscarPoliza.svg',
          path: '/',
          isActive: false,
        },
        {
          id: 'consulta-xml',
          name: 'Consulta de XML',
          icon: '/assets/icons/menu/Tablas.svg',
          iconActive: '/assets/icons/menu/Tablas.svg',
          path: ApRoutes.garantias.path.consultas.path.consultaXml.full(),
          isActive: false,
        },
      ],
    },
    {
      id: 'ref-neg',
      name: 'Ref. Neg.',
      icon: '/assets/icons/Beneficios.svg',
      iconActive: '/assets/icons/Beneficios.svg',
      path: '/',
      isActive: false,
      opciones: [
        {
          id: 'palabras-excluir',
          name: 'Palabras Excluir',
          icon: '/assets/icons/menu/Root.svg',
          iconActive: '/assets/icons/menu/Root.svg',
          path: ApRoutes.garantias.path.refNeg.path.palabrasExcluir.full(),
          isActive: false,
        },
        {
          id: 'causa-ref-neg',
          name: 'Causa',
          icon: '/assets/icons/menu/Vector.svg',
          iconActive: '/assets/icons/menu/Vector.svg',
          path: ApRoutes.garantias.path.refNeg.path.causaRefNeg.full(),
          isActive: false,
        },
        {
          id: 'subcausa-ref-neg',
          name: 'Subcausa',
          icon: '/assets/icons/menu/Vector.svg',
          iconActive: '/assets/icons/menu/Vector.svg',
          path: ApRoutes.garantias.path.refNeg.path.subCausaRefNeg.full(),
          isActive: false,
        },
        {
          id: 'personas-ref-neg',
          name: 'Personas',
          icon: '/assets/icons/menu/Cliente.svg',
          iconActive: '/assets/icons/menu/Cliente.svg',
          path: ApRoutes.garantias.path.refNeg.path.personas.full(),
          isActive: false,
        },
      ],
    },
  ];
}
