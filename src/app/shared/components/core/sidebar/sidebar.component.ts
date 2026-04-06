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

export interface SideBarItem {
  id: string;
  name: string;
  icon: string;
  iconActive?: string;
  path?: string;
  isActive: boolean;
  menus?: menuSideBar[];
}

export interface menuSideBar {
  id: string;
  name: string;
  icon: string;
  iconActive?: string;
  path?: string;
  isActive: boolean;
  subMenus?: menuSideBar[];
}


@Component({
  selector: 'app-sidebar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
		NavbarComponent,
		RouterOutlet,
		MenuComponent,
		OverlayModule,
	], //  , BreadcrumbComponent, CarouselComponent, ResumeComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @ViewChild(NavbarComponent) menu!: NavbarComponent;

  @ViewChild('sideResponsive') menuResp!: ElementRef<HTMLElement>;

  isResumen = false;
  isOpenSideBar = false;
  sideNav!: null | HTMLElement;

  itemActive!: SideBarItem | null;
  subMenuActive!: menuSideBar | null;
  subSubMenuActive!: menuSideBar | null;
  openSideBarResp = signal<boolean>(true);
  isDesktopView: boolean = true
  private destroy$ = new Subject<void>();

  //PREVICANCER
  public sideBarItems: SideBarItem[] = [
    {
      id: 'emision',
      name: 'Emisión',
      icon: '/assets/icons/Portafolio.svg',
      iconActive: '/assets/icons/Portafolio.svg',
      path: '/',
      isActive: false,
      menus: [
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
      menus: [
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
          subMenus: [
            {
              id: 'consumo-garantias',
              name: 'Consumo de Garantías',
              icon: '/assets/icons/menu/Tablas.svg',
              iconActive: '/assets/icons/menu/Tablas.svg',
              path: '/',
              isActive: false,
            },
            {
              id: 'tipos-garantias',
              name: 'Tipos de garantías',
              icon: '/assets/icons/menu/Tablas.svg',
              iconActive: '/assets/icons/menu/Tablas.svg',
              path: '/',
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
              path: '/',
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
      menus: [
        {
          id: 'menu-administracion',
          name: 'Menú',
          icon: '/assets/icons/menu/route.svg',
          iconActive: '/assets/icons/menu/route.svg',
          path: '/',
          isActive: false,
        },
        {
          id: 'perfiles-administracion',
          name: 'Perfiles',
          icon: '/assets/icons/menu/Cliente.svg',
          iconActive: '/assets/icons/menu/Cliente.svg',
          path: '/',
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
      menus: [
        {
          id: 'garantias-poliza',
          name: 'Garantías por Póliza',
          icon: '/assets/icons/menu/Tablas.svg',
          iconActive: '/assets/icons/menu/Tablas.svg',
          path: '/',
          isActive: false,
        },
        {
          id: 'personas-consulta',
          name: 'Personas',
          icon: '/assets/icons/menu/Cliente.svg',
          iconActive: '/assets/icons/menu/Cliente.svg',
          path: '/',
          isActive: false,
        },
        {
          id: 'envio-poliza',
          name: 'Envio de Póliza',
          icon: '/assets/icons/menu/Factura.svg',
          iconActive: '/assets/icons/menu/Factura.svg',
          path: '/consultas/envioPoliza',
          isActive: false,
        },
        {
          id: 'solicitudes-consulta',
          name: 'Solicitudes',
          icon: '/assets/icons/menu/BuscarPoliza.svg',
          iconActive: '/assets/icons/menu/BuscarPoliza.svg',
          path: '/',
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
          path: '/',
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
      menus: [
        {
          id: 'palabras-excluir',
          name: 'Palabras Excluir',
          icon: '/assets/icons/menu/Root.svg',
          iconActive: '/assets/icons/menu/Root.svg',
          path: '/',
          isActive: false,
        },
        {
          id: 'causa-ref-neg',
          name: 'Causa',
          icon: '/assets/icons/menu/Vector.svg',
          iconActive: '/assets/icons/menu/Vector.svg',
          path: '/',
          isActive: false,
        },
        {
          id: 'subcausa-ref-neg',
          name: 'Subcausa',
          icon: '/assets/icons/menu/Vector.svg',
          iconActive: '/assets/icons/menu/Vector.svg',
          path: '/',
          isActive: false,
        },
        {
          id: 'personas-ref-neg',
          name: 'Personas',
          icon: '/assets/icons/menu/Cliente.svg',
          iconActive: '/assets/icons/menu/Cliente.svg',
          path: '/',
          isActive: false,
        },
      ],
    },
  ];

  onClickOutside(event: Event) {
    // Si un item esta activo Y el clic NO fue dentro de nuestro elemento y la vista desktop esta visible
    if(!this.sideNav?.contains(event.target as Node) && this.itemActive && this.isDesktopView) {
      this.hiddenAllMenus();
      this.removingAllActivedElements();
    }
  }

  constructor(
    private router: Router,
    private rs: StateService,
    private bo: BreakpointObserver,
    //private rutaStore: MenuService
  ) {
    this.bo
      .observe(['(min-width: 1150px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
         this.isDesktopView = state.matches;
        if (state.matches) {
          this.menuResp?.nativeElement?.classList.remove('visibleResp');
          this.openSideBarResp.set(false);
        }
      });
  }

  carrousel: CarouselI = {
    view: LocationSite.quoter,
    data: [
    {
      imgUrl: '/assets/imgs/banner3.png',
      redirectUrl: ''
    },
    {
      imgUrl: '/assets/imgs/banner1.png',
      redirectUrl: ''
    },
    {
      imgUrl: '/assets/imgs/banner2.png',
      redirectUrl: ''
    }
   ]
  }
path = { path: '/auto/step1'}

  ngOnInit(): void {
    this.showResumen();
  }

  ngAfterViewInit(): void {
    this.sideNav = document.getElementById('logo-sidebar');
    //initFlowbite();
  }

  OnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  showResumen() {
    setTimeout(() => {
      this.isResumen = this.rs.getResumen;
    }, 1000);
  }

  barra(value: any) {
    this.isOpenSideBar = value;
    if (value) {
      this.sideNav!.classList.add('barraLateral');
    } else {
      this.sideNav!.classList.remove('barraLateral');
    }
    this.hiddenAllMenus();
    this.removingAllActivedElements();
  }

  barraResp(value: boolean) {
    if (value) {
      this.openSideBarResp.set(value);
      this.menuResp.nativeElement.classList.add('visibleResp');
    } else {
      this.openSideBarResp.set(value);
      this.menuResp.nativeElement.classList.remove('visibleResp');
      this.removingAllActivedElements();
    }
  }

  onClickMenu(item: SideBarItem) {
    const menu = document.getElementById(item.id + '-menu');
    const itemMenu = document.getElementById(item.id);
    if (!this.itemActive) {
      if (menu) {
        item.isActive = true;
        this.itemActive = item;
        menu.classList.toggle('visible');
        this.positionModal(itemMenu!, menu);
      } else {
        this.itemActive = item;
        item.isActive = true;
      }
    } else if (this.itemActive.id !== item.id) {
      this.hiddenAllMenus();
      this.removingAllActivedElements();
      if (menu) {
        menu.classList.toggle('visible');
        this.positionModal(itemMenu!, menu);
        this.itemActive = item;
        item.isActive = true;
      } else {
        this.hiddenAllMenus();
        this.removingAllActivedElements();
        this.itemActive = item;
        item.isActive = true;
      }
    } else if (item.id === this.itemActive.id) {
      if (menu) {
        menu.classList.toggle('visible');
        this.positionModal(itemMenu!, menu);
        this.hiddenAllMenus(false);
        this.removingAllActivedElements(false);
        this.itemActive = item;
        item.isActive = !item.isActive;
      } else {
        this.hiddenAllMenus();
        this.removingAllActivedElements(false);
        this.itemActive = item;
        item.isActive = !item.isActive;
      }
    }
  }

  onClickMenuResp(item: SideBarItem) {
    const hasSubMenu = item.menus ? true : false;
    if (!this.openSideBarResp()) {
      this.openSideBarResp.set(true);
      this.menuResp.nativeElement.classList.add('visibleResp');
    }
    if (!this.itemActive) {
      if (hasSubMenu) {
        item.isActive = true;
        this.itemActive = item;
      } else {
        this.itemActive = item;
        item.isActive = true;
      }
    } else if (this.itemActive.id !== item.id) {
      this.removingAllActivedElements();
      if (hasSubMenu) {
        this.itemActive = item;
        item.isActive = true;
      } else {
        this.removingAllActivedElements();
        this.itemActive = item;
        item.isActive = true;
      }
    } else if (item.id === this.itemActive.id) {
      if (hasSubMenu) {
        this.removingAllActivedElements(false);
        this.itemActive = item;
        item.isActive = !item.isActive;
      } else {
        this.removingAllActivedElements(false);
        this.itemActive = item;
        item.isActive = !item.isActive;
      }
    }
  }

  onClickSubMenu(item: menuSideBar)
  {
    const menu = document.getElementById(item.id);
    const subMenu = document.getElementById(item.id + '-submenu');

    if (!this.subMenuActive)
    {
      item.isActive = true;
      if (subMenu)
      {
        subMenu?.classList.toggle('visible');
        this.positionModal(menu!, subMenu);
        this.subMenuActive = item;
      }
      else
      {
        this.subMenuActive = item;
        this.hiddenAllMenus();
        this.removingAllActivedElements();
        console.log("Click en opcion:" + item.path);
        //this.rutaStore.setDatosRuta(item.path!);
      }
    }
    else if (item.id !== this.subMenuActive.id)
    {
      const actualSubMenu = document.getElementById(
        this.subMenuActive.id + '-submenu',
      );
      this.sideBarItems.forEach((item) => {
        const PastSubMenu = item.menus?.find(
          (submenu) => this.subMenuActive!.id === submenu.id,
        );
        if (PastSubMenu) {
          PastSubMenu!.isActive = false;
        }
      });
      item.isActive = true;
      if (actualSubMenu) {
        actualSubMenu.classList.remove('visible');
      }
      if (subMenu) {
        this.positionModal(menu!, subMenu);
        subMenu?.classList.toggle('visible');
        this.subMenuActive = item;
      } else {
        this.subMenuActive = item;
        this.hiddenAllMenus();
        this.removingAllActivedElements();
      }
    }
    else if (item.id === this.subMenuActive.id)
    {
      if (subMenu) {
        this.positionModal(menu!, subMenu);
        subMenu?.classList.toggle('visible');
        item.isActive = !item.isActive;
        this.subMenuActive = item;
      } else {
        this.subMenuActive = item;
        this.hiddenAllMenus();
        this.removingAllActivedElements();
      }
    }
  }

  onClickSubMenuResp(item: menuSideBar) {
    const hasSubSubMenu = item.subMenus ? true : false;

    if (!this.subMenuActive) {
      item.isActive = true;
      if (hasSubSubMenu) {
        this.subMenuActive = item;
      } else {
        this.subMenuActive = item;
        this.removingAllActivedElements();
        console.log("Click en opcion:" + item.path);
        //this.rutaStore.setDatosRuta(item.path!);
      }
    } else if (item.id !== this.subMenuActive.id) {
      this.sideBarItems.forEach((item) => {
        const PastSubMenu = item.menus?.find(
          (submenu) => this.subMenuActive!.id === submenu.id,
        );
        if (PastSubMenu) {
          PastSubMenu!.isActive = false;
        }
      });
      item.isActive = true;
      if (hasSubSubMenu) {
        this.subMenuActive = item;
      } else {
        this.removingAllActivedElements();
        this.subMenuActive = item;
      }
    } else if (item.id === this.subMenuActive.id) {
      if (hasSubSubMenu) {
        item.isActive = !item.isActive;
        this.subMenuActive = item;
      } else {
        this.subMenuActive = item;
        this.removingAllActivedElements();
      }
    }
  }

  onClickSubSubmenu(item: menuSideBar) {
    if (!this.subSubMenuActive) {
      this.subSubMenuActive = item;
      item.isActive = true;
      this.hiddenAllMenus();
      this.removingAllActivedElements();
      console.log("Click en opcion:" + item.path);
      //this.rutaStore.setDatosRuta(item.path!);
    } else if (item.id !== this.subSubMenuActive.id) {
      this.sideBarItems.forEach((item) => {
        item.menus?.forEach((subMenu) => {
          if (subMenu?.subMenus) {
            const pastSubSubMenu = subMenu.subMenus?.find(
              (subSubMenu) => this.subSubMenuActive!.id === subSubMenu.id,
            );
            if (pastSubSubMenu) {
              pastSubSubMenu.isActive = false;
            }
          }
        });
      });
      item.isActive = true;
      this.subSubMenuActive = item;
      this.hiddenAllMenus();
      this.removingAllActivedElements();
    } else if (item.id === this.subSubMenuActive.id) {
      item.isActive = !item.isActive;
      this.hiddenAllMenus();
      this.removingAllActivedElements();
    }
  }

  onClickSubSubmenuReps(item: menuSideBar) {
    if (!this.subSubMenuActive) {
      this.subSubMenuActive = item;
      item.isActive = true;
      this.removingAllActivedElements();
    } else if (item.id !== this.subSubMenuActive.id) {
      this.sideBarItems.forEach((item) => {
        item.menus?.forEach((subMenu) => {
          if (subMenu?.subMenus) {
            const pastSubSubMenu = subMenu.subMenus?.find(
              (subSubMenu) => this.subSubMenuActive!.id === subSubMenu.id,
            );
            if (pastSubSubMenu) {
              pastSubSubMenu.isActive = false;
            }
          }
        });
      });
      item.isActive = true;
      this.subSubMenuActive = item;
      this.removingAllActivedElements();
    } else if (item.id === this.subSubMenuActive.id) {
      item.isActive = !item.isActive;
      this.removingAllActivedElements();
    }

    this.openSideBarResp.set(false);
    this.menuResp.nativeElement.classList.remove('visibleResp');
  }

  removingAllActivedElements(all = true) {
    if (all) {
      let item = this.sideBarItems.find(
        (item) => item.id === this.itemActive?.id,
      );
      if (item) {
        item!.isActive = false;
        this.itemActive = null;
      }
    }
    this.sideBarItems.forEach((item) => {
      if (item.menus && this.subMenuActive) {
        const SubMenu = item.menus?.find(
          (submenu) => this.subMenuActive?.id === submenu.id,
        );
        if (SubMenu) {
          SubMenu!.isActive = false;
          this.subMenuActive = null;
        }
      }
      item.menus?.forEach((subMenu) => {
        if (subMenu?.subMenus && this.subSubMenuActive) {
          const SubSubMenu = subMenu.subMenus?.find(
            (subSubMenu) => this.subSubMenuActive?.id === subSubMenu.id,
          );
          if (SubSubMenu) {
            SubSubMenu.isActive = false;
            this.subSubMenuActive = null;
          }
        }
      });
    });
  }

  hiddenAllMenus(all = true) {
    if (all) {
      if (this.itemActive) {
        const itemActive = document.getElementById(
          this.itemActive.id + '-menu',
        );
        itemActive?.classList.remove('visible');
      }
    }
    if (this.subMenuActive) {
      const actualSubMenu = document.getElementById(
        this.subMenuActive.id + '-submenu',
      );
      actualSubMenu?.classList.remove('visible');
    }
  }

  positionModal(item: HTMLElement, menu: HTMLElement) {
    const altoPantalla = window.innerHeight;
    const position = item?.getBoundingClientRect();
    menu.style.left = (position.left + position.width + 10).toString() + 'px';
    if (position!.top > altoPantalla / 2) {
      menu.style.top =
        (
          position!.top -
          80 -
          menu.getBoundingClientRect().height +
          position!.height
        ).toString() + 'px';
    } else {
      menu.style.top = (position!.top - 80).toString() + 'px';
    }
  }
}
