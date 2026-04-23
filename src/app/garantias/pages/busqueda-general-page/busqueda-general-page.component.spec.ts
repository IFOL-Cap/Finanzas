import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaGeneralPageComponent } from './busqueda-general-page.component';

describe('BusquedaGeneralPageComponent', () => {
  let component: BusquedaGeneralPageComponent;
  let fixture: ComponentFixture<BusquedaGeneralPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaGeneralPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaGeneralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
