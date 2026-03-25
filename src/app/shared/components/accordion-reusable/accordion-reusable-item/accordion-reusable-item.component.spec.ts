import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionReusableItemComponent } from './accordion-reusable-item.component';

describe('AccordionReusableItemComponent', () => {
  let component: AccordionReusableItemComponent;
  let fixture: ComponentFixture<AccordionReusableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionReusableItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionReusableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
