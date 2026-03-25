import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Modal } from 'flowbite';
import { PrintMdlI } from '../../../interfaces';


@Component({
  selector: 'app-print',
  standalone: true,
  imports: [],
  templateUrl: './print.component.html'
})
export class PrintComponent {

  @Input() printConf?: PrintMdlI = { ///quitar el optonal
    title: '',
    content: '',
    footer: '',
    firstBtn: '',
    secondBtn: ''
  }
  modalPrint!: Modal;
  compModal!: HTMLElement;
  @Output() isOpenSave = new EventEmitter<boolean>();
  ngAfterViewInit() {

    this.compModal = document.getElementById('modalPrint')!;
    this.modalPrint = new Modal(this.compModal,{
      backdrop: 'static'
    });
  }

  openModalPrint() {
    this.modalPrint.show()
  }

  open() {
    this.isOpenSave.emit(true);
    this.modalPrint.hide()
  }

  closeModalPrint() {
    this.modalPrint.hide();
  }
}
