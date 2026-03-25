import { CommonModule } from '@angular/common';
import { Component, signal, effect, computed, Signal, viewChild, ElementRef, OnDestroy } from '@angular/core';
import { AccordionReusableItemComponent } from './accordion-reusable-item/accordion-reusable-item.component';
import { delay, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-accordion-reusable',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
})
export class AccordionReusableComponent implements OnDestroy {

  private items = signal<AccordionReusableItemComponent[]>([]);

  public $activeItem = new Subject<AccordionReusableItemComponent | null>()

  private destroy$ = new Subject<void>

  constructor() {
  this.$activeItem?.pipe(
    takeUntil(this.destroy$),
   delay(250)
  ).subscribe((t) =>  {
      if(t) {
    const elemet = document.getElementById(t.getId());
    elemet?.scrollIntoView({
      behavior: 'instant',
      block: 'center',
      inline: 'nearest'
    })}})
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  register(item:AccordionReusableItemComponent) : void {
    this.items.update(items => [...items,item]);
  }

  ngAfterContentInit(): void {

  this.items()[0]?.isOpened.set(true);
  this.items()[0]?.isActivaded.set(true);
  this.items().forEach((t) => {
    t.toggle.subscribe(() =>
      this.closeItems(t)
     )
    })

  }

  closeItems(item: AccordionReusableItemComponent) {
    item.isActivaded.set(true);
    this.items().forEach((t) =>  {
      if(t.getId() == item.getId()) return
      t.isOpened.set(false)
      t.isActivaded.set(false)
    })
    item.isOpened.set(!item.isOpened());
  }


}
