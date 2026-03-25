import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
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
  @ViewChild(NavbarComponent) menu!: NavbarComponent
	isOpen = false;
	showSubmenu: boolean = false;
	isOpenSub = false;
	isOpenSubsub = false;
	isOpenRes = false;
	
	pathNow: string = '';
	isResumen = false;
	isOpenSideBar = false;
	sideNav: any;
	subMenu: any;
	subSubmenu: any;

	constructor(private router: Router, private rs: StateService) {}
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
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.showResumen();
	}
	ngAfterViewInit(): void {
		//Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
		//Add 'implements AfterViewInit' to the class.
		this.sideNav = document.getElementById('logo-sidebar');
		this.subMenu = document.getElementById('sub');
		this.subSubmenu = document.getElementById('subSubMenu');
	}

	navigation() {
		this.router.navigate(['/auto/step1'])
	}
	navigationRes() {
		this.menu.barraResp()
	}

	showResumen() {
		setTimeout(() => {
			this.isResumen = this.rs.getResumen;
		}, 1000);
	}

	barra(value: any) {
		this.isOpenSideBar = value;
		// this.sideNav.classList.toggle("barraLateral")
	}

	openSubmenu() {
		this.isOpenRes = !this.isOpenRes
		this.subMenu.classList.toggle("open")
	}
	openSubSubMenu() {
		this.isOpenSubsub = !this.isOpenSubsub
		this.subSubmenu.classList.toggle("openSub")
	}
}
