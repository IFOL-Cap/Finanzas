import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaXmlComponent } from './consulta-xml.component';

describe('ConsultaXmlComponent', () => {
  let component: ConsultaXmlComponent;
  let fixture: ComponentFixture<ConsultaXmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaXmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
