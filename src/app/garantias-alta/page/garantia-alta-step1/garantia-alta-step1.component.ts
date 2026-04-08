import { Component, QueryList, signal, ViewChildren, WritableSignal } from '@angular/core';
import { AccordionReusableComponent } from '../../../shared/components/accordion-reusable/accordion-reusable.component';
import { AccordionReusableItemComponent } from '../../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component';
import { GeneralSearchComponent } from '../../templates/garantia-alta-step1/general-search/general-search.component';
import { ResulsComponent } from '../../templates/garantia-alta-step1/resuls/resuls.component';

@Component({
  selector: 'app-garantia-alta-step1',
  standalone: true,
  imports: [
    AccordionReusableComponent,
    AccordionReusableItemComponent,
    GeneralSearchComponent,
    ResulsComponent
  ],
  templateUrl: './garantia-alta-step1.component.html',
  styleUrl: './garantia-alta-step1.component.css'
})
export class GarantiaAltaStep1Component 
{
  @ViewChildren(AccordionReusableItemComponent) accordions! : QueryList<AccordionReusableItemComponent>
          
  public isAccordeonOneCompleted = signal<boolean>(false);

  onClickNextBtnTempOne(): void 
  {
    this.accordionNavegation(this.isAccordeonOneCompleted,0,1);
  }

  accordionNavegation(actualAccordionCompletedStatus: WritableSignal<boolean>, actualAccordionId: number, nextAccordionId: number) : void 
  {
    actualAccordionCompletedStatus.set(true);
    this.accordions.get(actualAccordionId)?.isOpened.set(false);
    this.accordions.get(nextAccordionId)?.isOpened.set(true);
    this.accordions.get(nextAccordionId)?.isActivaded.set(true);
  }
}
