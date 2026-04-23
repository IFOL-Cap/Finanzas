import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTerceroPageComponent } from './alta-tercero-page.component';

describe('AltaTerceroPageComponent', () => {
  let component: AltaTerceroPageComponent;
  let fixture: ComponentFixture<AltaTerceroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaTerceroPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaTerceroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
