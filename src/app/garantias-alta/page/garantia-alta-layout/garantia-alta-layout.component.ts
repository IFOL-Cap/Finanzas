import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepperComponent } from '../../../shared/components/stepper/stepper.component';
import { CarouselComponent } from '../../../shared/components/core/carousel/carousel.component';
import { CarouselI, FlowFrom, LocationSite } from '../../../shared/interfaces';

@Component({
  selector: 'app-garantia-alta-layout',
  standalone: true,
  imports: [
    RouterOutlet, 
    StepperComponent,
    CarouselComponent
  ],
  templateUrl: './garantia-alta-layout.component.html',
  styleUrl: './garantia-alta-layout.component.css'
})
export class GarantiaAltaLayoutComponent 
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
