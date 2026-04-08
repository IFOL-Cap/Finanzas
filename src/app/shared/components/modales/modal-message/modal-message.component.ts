import { Component, Input } from '@angular/core';
import { Modal } from 'flowbite';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../buttons/button/button.component';
import { Message } from '../../../interfaces';

type ModalStatus = 'success' | 'error';

@Component({
  selector: 'app-modal-message',
  standalone: true,
  imports: [
    ButtonComponent,
    CommonModule
  ],
  templateUrl: './modal-message.component.html',
  styleUrl: './modal-message.component.css'
})
export class ModalMessageComponent 
{
  @Input() modalMessage:Message = {
    title: '',
    message: '',
  }
  @Input() status: ModalStatus = 'success'; // 'success' | 'error'

  public modal!: Modal;
  public compModal!: HTMLElement;

  constructor(private router: Router) {}

  ngAfterViewInit() 
  {
    this.compModal = document.getElementById('modalMessage')!;
    this.modal = new Modal(this.compModal,{
      backdrop: 'static'
    });
  }

  openModal() 
  {
    this.modal.show();
  }

  closeModal():void 
  {
    this.modal.hide();
  }

  get ariaRole(): 'alert' | 'status' {
    return this.status === 'error' ? 'alert' : 'status';
  }
}
