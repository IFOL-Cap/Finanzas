import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormElement, LabelHelp, LabelInputFrom, LabelInputI, LabelToggleI } from '../../../interfaces';
import { LabelHelpComponent } from '../../messages-display/label-help/label-help.component';
import { InputComponent } from '../input/input.component';
import { ProtectedToggleComponent } from "../protected-toggle/protected-toggle.component";
import { QuestionLinkComponent } from '../../question-link/question-link.component';

@Component({
  selector: 'app-label-input',
  standalone: true,
  imports: [LabelHelpComponent, InputComponent, ProtectedToggleComponent, QuestionLinkComponent],
  templateUrl: './label-input.component.html',
  styleUrl: './label-input.component.css'
})
export class LabelInputComponent {
  @Input() labelInputConf: LabelInputI = {
    isCustom: false,
    from: LabelInputFrom.coverage 
  }
  @Input() inputConfig:FormElement = {
    type: 'text',
    pattern: '',
    isrequied: false,
    placeHolder: '',
    isDisable: false,
    isHidden: false,
    isRead: false,
    isInfo: false,
    labelInfo: '',
  }

  @Input() inputConfig2?:FormElement = {
    type: 'text',
    pattern: '',
    isrequied: false,
    placeHolder: '',
    isDisable: false,
    isHidden: false,
    isRead: false,
    isInfo: false,
    labelInfo: '',
  }

  @Input() labelHelp: LabelHelp = {
    idTool:'typeVechiculo',
    isRquired: false,
    isWithHelp: false,
    isWithSubtitle: false,
    title: '',
    subtitle: '',
    position: 'top',
    helpMsg: '',
  }

  @Input() pToggleConfg : LabelToggleI = {
    title: '',
    isChecked: false,
    display: '',
    title2: '',
    isWithToggle: false
  }
  @Output() isPToggleCheck = new EventEmitter<boolean>();
  onCheckedToggle(isCheck: boolean) {
    this.isPToggleCheck.emit(isCheck);
  }

}
