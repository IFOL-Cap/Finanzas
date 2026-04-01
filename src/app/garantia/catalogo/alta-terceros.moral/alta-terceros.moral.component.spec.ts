import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTercerosMoralComponent } from './alta-terceros.moral.component';

describe('AltaTercerosMoralComponent', () => {
  let component: AltaTercerosMoralComponent;
  let fixture: ComponentFixture<AltaTercerosMoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaTercerosMoralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaTercerosMoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
