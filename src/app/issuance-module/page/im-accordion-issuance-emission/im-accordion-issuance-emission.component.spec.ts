import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImAccordionIssuanceEmissionComponent } from './im-accordion-issuance-emission.component';

describe('ImAccordionIssuanceEmissionComponent', () => {
  let component: ImAccordionIssuanceEmissionComponent;
  let fixture: ComponentFixture<ImAccordionIssuanceEmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImAccordionIssuanceEmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImAccordionIssuanceEmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
