import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiaAltaLayoutComponent } from './garantia-alta-layout.component';

describe('GarantiaAltaLayoutComponent', () => {
  let component: GarantiaAltaLayoutComponent;
  let fixture: ComponentFixture<GarantiaAltaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarantiaAltaLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarantiaAltaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
