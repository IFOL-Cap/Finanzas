import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrintMessageComponent } from './modal-print-message.component';

describe('ModalPrintMessageComponent', () => {
  let component: ModalPrintMessageComponent;
  let fixture: ComponentFixture<ModalPrintMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPrintMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPrintMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
