import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTercerosComponent } from './alta-terceros.component';

describe('AltaTercerosComponent', () => {
  let component: AltaTercerosComponent;
  let fixture: ComponentFixture<AltaTercerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaTercerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaTercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
