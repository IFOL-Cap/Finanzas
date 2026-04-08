import { Component, QueryList, signal, ViewChildren, WritableSignal } from '@angular/core';
import { AccordionReusableComponent } from '../../../shared/components/accordion-reusable/accordion-reusable.component';
import { AccordionReusableItemComponent } from '../../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component';
import { CatalogoResultsComponent } from '../../templates/catalogos-table-step1/catalogo-results/catalogo-results.component';

@Component({
  selector: 'app-catalogos-table-step1',
  standalone: true,
  imports: [
    AccordionReusableComponent,
    AccordionReusableItemComponent,
    CatalogoResultsComponent
  ],
  templateUrl: './catalogos-table-step1.component.html',
  styleUrl: './catalogos-table-step1.component.css'
})
export class CatalogosTableStep1Component 
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
