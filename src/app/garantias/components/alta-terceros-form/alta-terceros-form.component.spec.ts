import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTercerosFormComponent } from './alta-terceros-form.component';

describe('AltaTercerosFormComponent', () => {
  let component: AltaTercerosFormComponent;
  let fixture: ComponentFixture<AltaTercerosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaTercerosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaTercerosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
