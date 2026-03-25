import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelHelpComponent } from "../../messages-display/label-help/label-help.component";
import { InputComponent } from "../../forms-elements/input/input.component";
import { ButtonsGroupComponent } from "../../buttons/buttons-group/buttons-group.component";
import { ButtonComponent } from "../../buttons/button/button.component";
import { Modal } from 'flowbite';
import { TextareaComponent } from '../../forms-elements/textarea/textarea.component';

@Component({
  selector: 'app-modal-print-send-mail',
  standalone: true,
  imports: [LabelHelpComponent, InputComponent, ButtonsGroupComponent, ButtonComponent, TextareaComponent,CommonModule],
  templateUrl: './modal-print-send-mail.component.html',
  styleUrl: './modal-print-send-mail.component.css'
})
export class ModalPrintSendMailComponent {
  
  receiptIncluded: boolean = false;

  modal: any;
  compModal: any;

  @Input() title: string = 'Titulo';
  @Input() showReceiptSection: boolean = true;


  ngAfterViewInit() {
    
    this.compModal = document.getElementById('modalSendMail');
    this.modal = new Modal(this.compModal);
  }
  
  openModalSendMail() {
    this.modal.show();
  }

  onAcomodadorResponse(isChecked: any){
    this.receiptIncluded= isChecked
   }

   closeModal(){
    this.modal.hide();
   }


}
