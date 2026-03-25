import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImQuotationIssuanceDataComponent } from './im-quotation-issuance-data.component';

describe('ImQuotationIssuanceDataComponent', () => {
  let component: ImQuotationIssuanceDataComponent;
  let fixture: ComponentFixture<ImQuotationIssuanceDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImQuotationIssuanceDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImQuotationIssuanceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
