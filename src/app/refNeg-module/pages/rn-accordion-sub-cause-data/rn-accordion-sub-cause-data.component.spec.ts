import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnAccordionSubCauseDataComponent } from './rn-accordion-sub-cause-data.component';

describe('RnAccordionSubCauseDataComponent', () => {
  let component: RnAccordionSubCauseDataComponent;
  let fixture: ComponentFixture<RnAccordionSubCauseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RnAccordionSubCauseDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RnAccordionSubCauseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
