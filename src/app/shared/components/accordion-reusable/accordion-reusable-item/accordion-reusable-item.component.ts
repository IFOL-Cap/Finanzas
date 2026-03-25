import { AfterViewInit, Component, computed, effect, ElementRef, inject, input, OnInit, output, signal, ViewChild, viewChild } from '@angular/core';
import { AccordionComponent } from '../../accordion/accordion.component';
import { AccordionReusableComponent } from '../accordion-reusable.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion-reusable-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './accordion-reusable-item.component.html',
  styleUrl: './accordion-reusable-item.component.css'
})
export class AccordionReusableItemComponent implements OnInit {


  headerCompleteTitle = input<string>('')
  headerCompleteSubtitle = input<string>('')
  isCompleted = input<boolean>(false);
  title = input<string>('');
  isOpened = signal<boolean>(false);
  isActivaded = signal<boolean>(false);
  private id =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  private accordion = inject(AccordionReusableComponent);
  toggle = output();
  isDefaultMargin = input<boolean>(true);

  constructor() {
    effect(() => {
       if(this.isActivaded()) {
        this.accordion.$activeItem.next(this);
       }
    })
  }

   ngOnInit(): void
  {
    this.accordion.register(this);
  }

  toogleOpened(): void
  {
    this.toggle.emit();
  }

  getId(): string
  {
    return this.id;
  }

}
