import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnAccordionExcludedWordsDataComponent } from './rn-accordion-excluded-words-data.component';

describe('RnAccordionExcludedWordsDataComponent', () => {
  let component: RnAccordionExcludedWordsDataComponent;
  let fixture: ComponentFixture<RnAccordionExcludedWordsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RnAccordionExcludedWordsDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RnAccordionExcludedWordsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
