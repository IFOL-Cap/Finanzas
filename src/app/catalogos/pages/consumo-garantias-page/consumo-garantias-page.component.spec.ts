import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoGarantiasPageComponent } from './consumo-garantias-page.component';

describe('ConsumoGarantiasPageComponent', () => {
  let component: ConsumoGarantiasPageComponent;
  let fixture: ComponentFixture<ConsumoGarantiasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumoGarantiasPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumoGarantiasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
