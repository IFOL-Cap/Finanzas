import { Component, EventEmitter, Output, viewChild } from '@angular/core';
import { Modal } from 'flowbite';
import { SaveQuoteComponent } from '../save-quote/save-quote.component';

@Component({
  selector: 'app-opc-responsive',
  standalone: true,
  imports: [],
  templateUrl: './opc-responsive.component.html'
})
export class OpcResponsiveComponent 
{
  @Output() isOpenSave = new EventEmitter<string>();
  
  modalcalc: any;
  compModal: any;

  ngAfterViewInit() 
  {
    
    this.compModal = document.getElementById('modalOpc');
    this.modalcalc = new Modal(this.compModal);
  }
  
  openModal() 
  {
    this.modalcalc.show()
  }

  open(value: any) 
  {
    this.isOpenSave.emit(value);
    this.modalcalc.hide()
  }
}
