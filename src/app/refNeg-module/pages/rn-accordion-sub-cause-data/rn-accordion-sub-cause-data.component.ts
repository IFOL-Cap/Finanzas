import { Component } from '@angular/core';
import { AccordionReusableComponent } from "../../../shared/components/accordion-reusable/accordion-reusable.component";
import { AccordionReusableItemComponent } from "../../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component";
import { RequiredInfoComponent } from "../../../shared/components/messages-display/required-info/required-info.component";
import { RnSubCauseComponent } from "../../templates/rn-sub-cause/rn-sub-cause.component";
import { RequiredInfo } from '../../../shared/interfaces';

@Component({
  selector: 'app-rn-accordion-sub-cause-data',
  standalone: true,
  imports: [AccordionReusableComponent, AccordionReusableItemComponent, RequiredInfoComponent, RnSubCauseComponent],
  templateUrl: './rn-accordion-sub-cause-data.component.html',
  styleUrl: './rn-accordion-sub-cause-data.component.css'
})
export class RnAccordionSubCauseDataComponent {
requiredInfo: RequiredInfo = {
    message: `Nota: Los campos marcados con un asterisco (*) son obligatorios.`,
    isCustom: false,
  };
}
