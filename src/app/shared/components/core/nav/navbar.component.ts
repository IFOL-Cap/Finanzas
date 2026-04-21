import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { SearchComponent } from '../../forms-elements/search/search.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { LoginService } from '../../../services/login.service';
import { ApRoutes } from '../../../consts';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnDestroy, OnChanges {

  constructor(
      private loginService: LoginService,
		private router: Router,
  )
  {}

  miSuscripcion!: Subscription;
  rutaActual: string = ''
  route = inject(Router);
  @Output() isOpenSideBar = new EventEmitter<boolean>();
  @Input() sideNav: boolean = false;
  dataUser: string = "52307000 / jbastida@mapfre.com.mx"
  path!: '';
  isOpen = false;
  today: any;
  isSearch = false;
  flowTitle: string="";
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.today = Date.now()
    // this.today =moment(this.today).format("LL")

 this.miSuscripcion =  this.route.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.rutaActual = event.urlAfterRedirects;
        let path = this.rutaActual.split("/")[1];
        this.getflowTitile(path);
      });
  }


  getflowTitile(ruta: string) {
    switch(ruta.toLowerCase()){
      case "gs":
        this.flowTitle = "Fianzas";
      break;
    }
    }



  barra() {
    this.isOpen = !this.isOpen
    this.isOpenSideBar.emit(this.isOpen)
  }

  barraResp() {
    this.isOpen = !this.isOpen
    this.isOpenSideBar.emit(this.isOpen)
  }

  closeInput(value: any){
    this.isSearch = value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sideNav'] && typeof this.sideNav === 'boolean') {
      this.isOpen = this.sideNav;
    }
  }

  ngOnDestroy(): void {
    this.miSuscripcion.unsubscribe();
  }

  	logout() {
		this.loginService.logout();
		this.router.navigate([ApRoutes.login.value]);
	}

}
