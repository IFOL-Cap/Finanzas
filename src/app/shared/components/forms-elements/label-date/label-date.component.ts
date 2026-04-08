import { Component, Input } from '@angular/core';
import { DateComponent } from '../date/date.component';
import { LabelHelpComponent } from '../../messages-display/label-help/label-help.component';
import { FormElement, LabelHelp } from '../../../interfaces';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label-date',
  standalone: true,
  imports: [CommonModule, DateComponent, LabelHelpComponent, InputComponent],
  templateUrl: './label-date.component.html',
  styleUrl: './label-date.component.css'
})
export class LabelDateComponent {

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

  @Input() dateConfig: FormElement = {
    type: '',
    pattern: '',
    isRequired: false,
    placeHolder: '',
    isDisabled: false,
    isHidden: false,
    isEdad: false,
    idDate:'',
    isFrom: false
  }

  
  @Input() inputConfig:FormElement = {
    type: 'text',
    pattern: '',
    isRequired: false,
    placeHolder: '',
    isDisabled: false,
    isHidden: false,
    isRead: false,
  }
}
