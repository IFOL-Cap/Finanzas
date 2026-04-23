import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtiposGarantiaFormComponent } from './subtipos-garantia-form.component';

describe('SubtiposGarantiaFormComponent', () => {
  let component: SubtiposGarantiaFormComponent;
  let fixture: ComponentFixture<SubtiposGarantiaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtiposGarantiaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtiposGarantiaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
