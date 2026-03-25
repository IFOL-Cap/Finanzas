import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselI, LocationSite } from '../../../interfaces';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() carouselConfig: CarouselI = {
    view: LocationSite.quoter,
    data: []
  }

  ngAfterViewInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.carouselConfig = this.carouselConfig
  }
}
