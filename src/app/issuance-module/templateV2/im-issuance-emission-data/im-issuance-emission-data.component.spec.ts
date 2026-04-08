import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImIssuanceEmissionDataComponent } from './im-issuance-emission-data.component';

describe('ImIssuanceEmissionDataComponent', () => {
  let component: ImIssuanceEmissionDataComponent;
  let fixture: ComponentFixture<ImIssuanceEmissionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImIssuanceEmissionDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImIssuanceEmissionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
