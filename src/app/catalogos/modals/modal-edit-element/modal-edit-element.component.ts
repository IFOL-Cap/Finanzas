import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/components/forms-elements/input/input.component';
import { ButtonComponent } from '../../../shared/components/buttons/button/button.component';
import { ButtonsGroupComponent } from '../../../shared/components/buttons/buttons-group/buttons-group.component';
import { Modal } from 'flowbite';
import { FormElement } from '../../../shared/interfaces';

@Component({
  selector: 'app-modal-edit-element',
  standalone: true,
  imports: [
    InputComponent, 
    ButtonComponent,
    ButtonsGroupComponent
  ],
  templateUrl: './modal-edit-element.component.html',
  styleUrl: './modal-edit-element.component.css'
})
export class ModalEditElementComponent 
{
  public modalEditElement!: Modal;
  public compModal!: HTMLElement;

  public buttonsConfig: FormElement = {
    type: '',
    pattern: '',
    isRequired: false,
    placeHolder: '',
    isDisabled: false,
    isHidden: false,
    titleLeft: 'No', 
    titleRight: 'Si',
    optionSelected: 1,
    isMultipleButton: false,
    titleMiddle: ''
  }

  ngAfterViewInit() 
  {
    this.compModal = document.getElementById('modalEditElement')!;
    this.modalEditElement = new Modal(this.compModal,{ backdrop: 'static'});
  }

  openModal() 
  {
    this.modalEditElement.show();
  }

  closeModal():void 
  {
    this.modalEditElement.hide();
  }
}
