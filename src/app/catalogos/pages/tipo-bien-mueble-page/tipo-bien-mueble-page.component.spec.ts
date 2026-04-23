import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBienMueblePageComponent } from './tipo-bien-mueble-page.component';

describe('TipoBienMueblePageComponent', () => {
  let component: TipoBienMueblePageComponent;
  let fixture: ComponentFixture<TipoBienMueblePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoBienMueblePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoBienMueblePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
