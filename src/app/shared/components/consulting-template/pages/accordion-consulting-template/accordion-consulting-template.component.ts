import { Component, QueryList, signal, ViewChildren, WritableSignal } from '@angular/core';
import { AccordionReusableComponent } from "../../../accordion-reusable/accordion-reusable.component";
import { AccordionReusableItemComponent } from "../../../accordion-reusable/accordion-reusable-item/accordion-reusable-item.component";
import { RequiredInfoComponent } from "../../../messages-display/required-info/required-info.component";
import { LabelHelpComponent } from "../../../messages-display/label-help/label-help.component";
import { SelectComponent } from "../../../forms-elements/select/select.component";
import { RequiredInfo } from '../../../../interfaces';
import { ConsultingTemplateComponent } from "../../templates/accordion-consulting-template/consulting-template.component";

@Component({
  selector: 'app-accordion-consulting-template',
  standalone: true,
  imports: [AccordionReusableComponent, AccordionReusableItemComponent, RequiredInfoComponent, LabelHelpComponent, SelectComponent, ConsultingTemplateComponent],
  templateUrl: './accordion-consulting-template.component.html',
  styleUrl: './accordion-consulting-template.component.css'
})
export class AccordionConsultingTemplateComponent {

  @ViewChildren(AccordionReusableItemComponent) accordions! : QueryList<AccordionReusableItemComponent>

   requiredInfo: RequiredInfo = {
		message: `Completa los campos marcados con * para continuar con la cotización`,
		isCustom: false,
	};

  isInsuredInformationCompleted = signal<boolean>(false);
  isDataPlanCompleted = signal<boolean>(false);
  isCoverageCompleted = signal<boolean>(false);


  onClickNextBtnInsuredInformation(): void {
    this.accordionNavegation(this.isInsuredInformationCompleted,0,1);
  }

   onClickNextBtnPlanData(): void {
    this.accordionNavegation(this.isDataPlanCompleted,1,2);
  }


    accordionNavegation(actualAccordionCompletedStatus: WritableSignal<boolean> ,
      actualAccordionId: number, nextAccordionId: number) : void {
        actualAccordionCompletedStatus.set(true);
       this.accordions.get(actualAccordionId)?.isOpened.set(false);
       this.accordions.get(nextAccordionId)?.isOpened.set(true);
        this.accordions.get(nextAccordionId)?.isActivaded.set(true);
    }

}
