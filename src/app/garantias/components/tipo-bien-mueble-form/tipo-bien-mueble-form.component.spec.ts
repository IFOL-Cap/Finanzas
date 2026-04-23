import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBienMuebleFormComponent } from './tipo-bien-mueble-form.component';

describe('TipoBienMuebleFormComponent', () => {
  let component: TipoBienMuebleFormComponent;
  let fixture: ComponentFixture<TipoBienMuebleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoBienMuebleFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoBienMuebleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
