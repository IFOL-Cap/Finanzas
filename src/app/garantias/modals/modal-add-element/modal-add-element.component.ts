import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/components/forms-elements/input/input.component';
import { ButtonComponent } from '../../../shared/components/buttons/button/button.component';
import { FormElement } from '../../../shared/interfaces';
import { ButtonsGroupComponent } from '../../../shared/components/buttons/buttons-group/buttons-group.component';
import { Modal } from 'flowbite';

@Component({
  selector: 'app-modal-add-element',
  standalone: true,
  imports: [
    InputComponent, 
    ButtonComponent,
    ButtonsGroupComponent
  ],
  templateUrl: './modal-add-element.component.html',
  styleUrl: './modal-add-element.component.css'
})
export class ModalAddElementComponent 
{
  public modalAddElement!: Modal;
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
    this.compModal = document.getElementById('modalAddElement')!;
    this.modalAddElement = new Modal(this.compModal,{ backdrop: 'static'});
  }

  openModal() 
  {
    this.modalAddElement.show();
  }

  closeModal():void 
  {
    this.modalAddElement.hide();
  }
}
