import { Component } from '@angular/core';
import { AccordionReusableComponent } from '../../../shared/components/accordion-reusable/accordion-reusable.component';
import { AccordionReusableItemComponent } from '../../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component';
import { RequiredInfoComponent } from '../../../shared/components/messages-display/required-info/required-info.component';
import { RequiredInfo } from '../../../shared/interfaces';
import { ImQuotationIssuanceDataComponent } from '../../template/im-quotation-issuance-data/im-quotation-issuance-data.component';

@Component({
  selector: 'app-im-accordion-quotation-issuance-data',
  standalone: true,
  imports: [
    AccordionReusableComponent,
    AccordionReusableItemComponent,
    RequiredInfoComponent,
    ImQuotationIssuanceDataComponent
  ],
  templateUrl: './im-accordion-quotation-issuance-data.component.html',
  styleUrl: './im-accordion-quotation-issuance-data.component.css'
})
export class ImAccordionQuotationIssuanceDataComponent {
requiredInfo: RequiredInfo = {
    message: `Nota: Los campos marcados con un asterisco (*) son obligatorios.`,
    isCustom: false,
  };
}
