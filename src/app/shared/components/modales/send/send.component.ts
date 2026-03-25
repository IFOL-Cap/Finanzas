import { Component, EventEmitter, Output } from '@angular/core';
import { Modal } from 'flowbite';
import { InputComponent } from '../../forms-elements/input/input.component';
import { ButtonComponent } from '../../buttons/button/button.component';


@Component({
  selector: 'app-send',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './send.component.html'
})
export class SendComponent {
  @Output() isOpenSave = new EventEmitter<boolean>();

  modalSend!: Modal;
  compModal!: HTMLElement;
  dataUser = {
    name: 'BASTIDA OJEDA, JOSHUA',
    email: 'jbastida@mapfre.com.mx'
  }
  ngAfterViewInit() {

    this.compModal = document.getElementById('modalSend')!;
    this.modalSend = new Modal(this.compModal,{
      backdrop: 'static'
    });
  }

  openModalSend() {
    this.modalSend.show()
  }

  open() {
    this.isOpenSave.emit(true);
    this.modalSend.hide()
  }

  closeModalSend() {
    this.modalSend.hide()
  }
}
