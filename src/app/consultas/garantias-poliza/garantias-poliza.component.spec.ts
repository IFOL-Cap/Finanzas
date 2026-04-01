import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiasPolizaComponent } from './garantias-poliza.component';

describe('GarantiasPolizaComponent', () => {
  let component: GarantiasPolizaComponent;
  let fixture: ComponentFixture<GarantiasPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarantiasPolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarantiasPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
