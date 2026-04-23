import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposGarantiaFormComponent } from './tipos-garantia-form.component';

describe('TiposGarantiaFormComponent', () => {
  let component: TiposGarantiaFormComponent;
  let fixture: ComponentFixture<TiposGarantiaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposGarantiaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposGarantiaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
