import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepperComponent } from '../../../shared/components/stepper/stepper.component';
import { CarouselComponent } from '../../../shared/components/core/carousel/carousel.component';
import { CarouselI, FlowFrom, LocationSite } from '../../../shared/interfaces';

@Component({
  selector: 'app-catalogos-table-layout',
  standalone: true,
  imports: [
    RouterOutlet, 
    StepperComponent,
    CarouselComponent
  ],
  templateUrl: './catalogos-table-layout.component.html',
  styleUrl: './catalogos-table-layout.component.css'
})
export class CatalogosTableLayoutComponent 
{
  public flowFrom = FlowFrom;
          
  public carrousel: CarouselI = {
    view: LocationSite.quoter,
    data: [
      {
        imgUrl: '/assets/imgs/carousel/banner3.png',
        redirectUrl: ''
      },
      {
        imgUrl: '/assets/imgs/carousel/banner1.png',
        redirectUrl: ''
      },
      {
        imgUrl: '/assets/imgs/carousel/banner2.png',
        redirectUrl: ''
      }
    ]
  }
}
