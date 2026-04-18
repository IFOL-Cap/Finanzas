import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionConsultingTemplateComponent } from './accordion-consulting-template.component';

describe('AccordionConsultingTemplateComponent', () => {
  let component: AccordionConsultingTemplateComponent;
  let fixture: ComponentFixture<AccordionConsultingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionConsultingTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionConsultingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
