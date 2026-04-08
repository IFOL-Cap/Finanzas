import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiaAltaStep1Component } from './garantia-alta-step1.component';

describe('GarantiaAltaStep1Component', () => {
  let component: GarantiaAltaStep1Component;
  let fixture: ComponentFixture<GarantiaAltaStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarantiaAltaStep1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarantiaAltaStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
