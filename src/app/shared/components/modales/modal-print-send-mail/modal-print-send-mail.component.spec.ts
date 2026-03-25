import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrintSendMailComponent } from './modal-print-send-mail.component';

describe('ModalPrintSendMailComponent', () => {
  let component: ModalPrintSendMailComponent;
  let fixture: ComponentFixture<ModalPrintSendMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPrintSendMailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPrintSendMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
