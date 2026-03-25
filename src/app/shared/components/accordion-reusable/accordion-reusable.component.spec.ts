import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionReusableComponent } from './accordion-reusable.component';

describe('AccordionReusableComponent', () => {
  let component: AccordionReusableComponent;
  let fixture: ComponentFixture<AccordionReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionReusableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
