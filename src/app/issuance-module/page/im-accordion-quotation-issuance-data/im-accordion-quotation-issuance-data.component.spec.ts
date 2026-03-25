import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImAccordionQuotationIssuanceDataComponent } from './im-accordion-quotation-issuance-data.component';

describe('ImAccordionQuotationIssuanceDataComponent', () => {
  let component: ImAccordionQuotationIssuanceDataComponent;
  let fixture: ComponentFixture<ImAccordionQuotationIssuanceDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImAccordionQuotationIssuanceDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImAccordionQuotationIssuanceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
