import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposGarantiasPageComponent } from './tipos-garantias-page.component';

describe('TiposGarantiasPageComponent', () => {
  let component: TiposGarantiasPageComponent;
  let fixture: ComponentFixture<TiposGarantiasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposGarantiasPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposGarantiasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
