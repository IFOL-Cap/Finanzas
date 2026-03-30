import { Component, EventEmitter, Output } from '@angular/core';
import { AccordionReusableComponent } from "../../../shared/components/accordion-reusable/accordion-reusable.component";
import { AccordionReusableItemComponent } from "../../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component";
import { RequiredInfoComponent } from "../../../shared/components/messages-display/required-info/required-info.component";
import { RequiredInfo } from '../../../shared/interfaces';
import { RnExcludedWordsComponent } from "../../templates/rn-excluded-words/rn-excluded-words.component";

@Component({
  selector: 'app-rn-accordion-excluded-words-data',
  standalone: true,
  imports: [AccordionReusableComponent, AccordionReusableItemComponent, RequiredInfoComponent, RnExcludedWordsComponent],
  templateUrl: './rn-accordion-excluded-words-data.component.html',
  styleUrl: './rn-accordion-excluded-words-data.component.css'
})
export class RnAccordionExcludedWordsDataComponent {
requiredInfo: RequiredInfo = {
    message: `Nota: Los campos marcados con un asterisco (*) son obligatorios.`,
    isCustom: false,
  };
  
}
