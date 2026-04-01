import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioPolizaComponent } from './envio-poliza.component';

describe('EnvioPolizaComponent', () => {
  let component: EnvioPolizaComponent;
  let fixture: ComponentFixture<EnvioPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvioPolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
