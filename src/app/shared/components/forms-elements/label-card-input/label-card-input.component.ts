import { Component, Input } from '@angular/core';
import { FormElement, LabelHelp } from '../../../interfaces';
import { LabelHelpComponent } from '../../messages-display/label-help/label-help.component';
import { InputComponent } from '../input/input.component';
import { CardInputComponent } from '../card-input/card-input.component';
//import { CardInputComponent } from "../card-input/card-input.component";

@Component({
  selector: 'app-label-card-input',
  standalone: true,
  imports: [LabelHelpComponent, InputComponent, CardInputComponent],
  templateUrl: './label-card-input.component.html',
  styleUrl: './label-card-input.component.css'
})
export class LabelCardInputComponent {

  @Input() inputConfig:FormElement = {
    type: 'text',
    pattern: '',
    isRequired: false,
    placeHolder: '',
    isDisabled: false,
    isHidden: false,
    isRead: false,
    isInfo: false,
    labelInfo: '',
  }

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
}