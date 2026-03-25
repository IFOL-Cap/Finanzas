import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnDestroy, Output } from '@angular/core';
import { SearchComponent } from '../../forms-elements/search/search.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnDestroy {


  miSuscripcion!: Subscription;
  rutaActual: string = ''
  route = inject(Router);
  @Output() isOpenSideBar = new EventEmitter<boolean>();
  @Input() sideNav: any;
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
        this.flowTitle = "Finanzas";
      break;
    }
    }



  barra() {
    this.sideNav.classList.toggle("barraLateral")
    this.isOpen = !this.isOpen
    this.isOpenSideBar.emit(this.isOpen)
  }

  barraResp() {
    this.isOpen = !this.isOpen
    this.isOpenSideBar.emit(this.isOpen)
    this.sideNav.classList.toggle("menuResponsive")

  }

  closeInput(value: any){
    this.isSearch = value;
  }


  ngOnDestroy(): void {
    this.miSuscripcion.unsubscribe();
  }
}
