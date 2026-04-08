import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormElement, LabelHelp } from '../../../interfaces';
import { LabelHelpComponent } from '../../messages-display/label-help/label-help.component';
import { ButtonsGroupComponent } from '../../buttons/buttons-group/buttons-group.component';
import { InputComponent } from "../input/input.component";

@Component({
  selector: 'app-label-buttons-group',
  standalone: true,
  imports: [LabelHelpComponent, ButtonsGroupComponent, InputComponent],
  templateUrl: './label-buttons-group.component.html',
  styleUrl: './label-buttons-group.component.css'
})
export class LabelButtonsGroupComponent {
  @Output() selected = new EventEmitter<any>();
  @Input() labelHelp: LabelHelp = {
    idTool:'typeVechiculo',
    isRequired: false,
    isWithHelp: false,
    isWithSubtitle: false,
    title: '',
    subtitle: '',
    position: 'top',
    helpMsg: '',
  }
  @Input() isButtons: boolean = true;
 
  @Input() buttonsConfig: FormElement = {
    type: '',
    pattern: '',
    isRequired: false,
    placeHolder: '',
    isDisabled: false,
    isHidden: false,
    titleLeft: '',
    titleRight: '',
    optionSelected: 1,
    isMultipleButton: false,
    titleMiddle: ''
  }

  @Input() inputConfig: FormElement = {
			type: 'text',
			pattern: '',
			isRequired: false,
			placeHolder: '',
			isDisabled: false,
			isHidden: false,
			isRead: false,
		  }
  @Input() isSecondInputShow: boolean = false;

  optionSelected(value: boolean) {
    this.selected.emit(value);
  }
}
