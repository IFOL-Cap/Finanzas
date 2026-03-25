import { Component } from '@angular/core';
import { AccordionReusableItemComponent } from '../../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component';
import { AccordionReusableComponent } from '../../../shared/components/accordion-reusable/accordion-reusable.component';
import { RequiredInfoComponent } from '../../../shared/components/messages-display/required-info/required-info.component';
import { RequiredInfo } from '../../../shared/interfaces';
import { ImIssuanceEmissionDataComponent } from '../../template/im-issuance-emission-data/im-issuance-emission-data.component';

@Component({
  selector: 'app-im-accordion-issuance-emission',
  standalone: true,
  imports: [
    AccordionReusableComponent,
    AccordionReusableItemComponent,
    RequiredInfoComponent,
    ImIssuanceEmissionDataComponent
  ],
  templateUrl: './im-accordion-issuance-emission.component.html',
  styleUrl: './im-accordion-issuance-emission.component.css'
})
export class ImAccordionIssuanceEmissionComponent {
requiredInfo: RequiredInfo = {
    message: `Nota: Los campos marcados con un asterisco (*) son obligatorios.`,
    isCustom: false,
  };
  
}
