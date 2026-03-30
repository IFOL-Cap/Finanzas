import { Component } from '@angular/core';
import { LabelSelectComponent } from "../../../shared/components/forms-elements/label-select/label-select.component";
import { LabelInputComponent } from "../../../shared/components/forms-elements/label-input/label-input.component";
import { LabelDateComponent } from "../../../shared/components/forms-elements/label-date/label-date.component";
import { ButtonComponent } from "../../../shared/components/buttons/button/button.component";
import { AccordionReusableComponent } from "../../../shared/components/accordion-reusable/accordion-reusable.component";
import { AccordionReusableItemComponent } from "../../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component";
import { RequiredInfoComponent } from "../../../shared/components/messages-display/required-info/required-info.component";
import { RnCauseComponent } from "../../templates/rn-cause/rn-cause.component";
import { RequiredInfo } from '../../../shared/interfaces';

@Component({
  selector: 'app-rn-accordion-cause-data',
  standalone: true,
  imports: [LabelSelectComponent, LabelInputComponent, LabelDateComponent, ButtonComponent, AccordionReusableComponent, AccordionReusableItemComponent, RequiredInfoComponent, RnCauseComponent],
  templateUrl: './rn-accordion-cause-data.component.html',
  styleUrl: './rn-accordion-cause-data.component.css'
})
export class RnAccordionCauseDataComponent {
requiredInfo: RequiredInfo = {
    message: `Nota: Los campos marcados con un asterisco (*) son obligatorios.`,
    isCustom: false,
  };
}
