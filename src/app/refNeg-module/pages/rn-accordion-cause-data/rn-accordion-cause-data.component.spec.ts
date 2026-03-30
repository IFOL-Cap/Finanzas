import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnAccordionCauseDataComponent } from './rn-accordion-cause-data.component';

describe('RnAccordionCauseDataComponent', () => {
  let component: RnAccordionCauseDataComponent;
  let fixture: ComponentFixture<RnAccordionCauseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RnAccordionCauseDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RnAccordionCauseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
