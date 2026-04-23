import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiasFormComponentComponent } from './garantias-form-component.component';

describe('GarantiasFormComponentComponent', () => {
  let component: GarantiasFormComponentComponent;
  let fixture: ComponentFixture<GarantiasFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarantiasFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarantiasFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
