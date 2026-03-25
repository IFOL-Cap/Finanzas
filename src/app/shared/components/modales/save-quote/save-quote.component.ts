import { Component } from '@angular/core';
import { Modal } from 'flowbite';
import { InputComponent } from '../../forms-elements/input/input.component';
import { ButtonComponent } from '../../buttons/button/button.component';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-save-quote',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './save-quote.component.html'
})
export class SaveQuoteComponent {

  modalcalc!: Modal;
  compModal!: HTMLElement;

  ngAfterViewInit() {

    if(document.getElementById('modalSave')) {
       this.compModal = document.getElementById('modalSave')!;
    }

    this.modalcalc = new Modal(this.compModal,{
      backdrop: 'static'
    });
  }

  openModalSave() {
    this.modalcalc.show()
  }

  closeModalSave() {
  this.modalcalc.hide()
  }

}
