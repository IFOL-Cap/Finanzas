import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaResultComponent } from './busqueda-result.component';

describe('BusquedaResultComponent', () => {
  let component: BusquedaResultComponent;
  let fixture: ComponentFixture<BusquedaResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
