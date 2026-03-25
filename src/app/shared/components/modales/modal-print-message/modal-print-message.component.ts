import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'flowbite';
import { ButtonComponent } from '../../buttons/button/button.component';
import { CommonModule } from '@angular/common';
import { ModalPrintSendMailComponent } from '../modal-print-send-mail/modal-print-send-mail.component';
import { FileSaverService } from '../../../services/file-saver.service';
import { File } from '../../../models/File';

@Component({
  selector: 'app-modal-print-message',
  standalone: true,
  imports: [ButtonComponent, CommonModule, ModalPrintSendMailComponent],
  templateUrl: './modal-print-message.component.html',
  styleUrl: './modal-print-message.component.css'
})
export class ModalPrintMessageComponent {

  
  modal!: Modal;
  compModal!: HTMLElement;

  @Input() title: string = 'Titulo';
  @Input() showWarningMesage :string  ='';
  @Input() showCancelBtn: boolean= true;
  @Input() downloadPolicy?: boolean = false;

  @ViewChild(ModalPrintSendMailComponent) modalSendMail! : ModalPrintSendMailComponent;

  printPolicy: File = {fileName: "ImprimeFPB_FichaBancaria_Jubilacion", path: "./assets/temp/"};

  constructor(private router: Router, private fileSaverService: FileSaverService) {

  }

  ngAfterViewInit() {
    
    this.compModal = document.getElementById('modalMessage')!;
    this.modal = new Modal(this.compModal);
  }
  
  openModalMessage() {
    this.modal.show();
  }


  ok(downloadPolicy? : boolean){
    console.log("Entra descarga");
      this.downloadFile(downloadPolicy);
      //this.modal.hide();
  }

  cancel(downloadPolicy? : boolean){
    this.modal.hide();
    //this.downloadFile(downloadPolicy);
  }

  downloadFile(downloadPolicy? : boolean){
    if(downloadPolicy){
    this.fileSaverService.downloadPDF(this.printPolicy);
    this.modalSendMail.openModalSendMail();
    }
  }


}
