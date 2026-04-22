import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionPageComponent } from './cotizacion-page.component';

describe('CotizacionPageComponent', () => {
  let component: CotizacionPageComponent;
  let fixture: ComponentFixture<CotizacionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotizacionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
