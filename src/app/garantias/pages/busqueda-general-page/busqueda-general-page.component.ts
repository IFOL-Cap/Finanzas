import { Component } from '@angular/core';
import { BusquedaFormComponent } from '../../components/busqueda-form/busqueda-form.component';
import { BusquedaResultComponent } from '../../components/busqueda-result/busqueda-result.component';
import { AccordionReusableComponent } from '../../../shared/components/accordion-reusable/accordion-reusable.component';
import { AccordionReusableItemComponent } from '../../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component';

@Component({
  selector: 'app-busqueda-general-page',
  standalone: true,
  imports: [BusquedaFormComponent,
    BusquedaResultComponent,
      AccordionReusableComponent,
      AccordionReusableItemComponent,],
  templateUrl: './busqueda-general-page.component.html',
  styleUrl: './busqueda-general-page.component.css'
})
export class BusquedaGeneralPageComponent {

}
