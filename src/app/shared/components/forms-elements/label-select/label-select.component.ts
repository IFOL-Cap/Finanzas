import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LabelHelpComponent } from '../../messages-display/label-help/label-help.component';
import { SelectComponent } from '../select/select.component';
import { Check, DifferetType, FormElement, LabelHelp } from '../../../interfaces';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label-select',
  standalone: true,
  imports: [FormsModule, CommonModule, LabelHelpComponent, SelectComponent],
  templateUrl: './label-select.component.html',
  styleUrl: './label-select.component.css'
})
export class LabelSelectComponent {
  @Input() item: string = 'input';
  @Input() check: Check = {
    titleCheck: '',
    helpMsg: '',
    isCheck: false,
    isHelpMsg: false
  }

  @Input() selectConfig:FormElement = {
    type: '',
    pattern: '',
    isrequied: false,
    placeHolder: '',
    isDisable: false,
    isHidden: false,
    id: DifferetType.none,
    isCheck: false,
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
  isChecked = false;
  @Output() checked = new EventEmitter<boolean>();

  @Output() itemSelected = new EventEmitter<string>();
   
  changes(value : any) {
    //value == 2 ? this.check.isCheck = false : this.check.isCheck = true;
    this.itemSelected.emit(value)
  }

  changeCheck() {

   this.checked.emit(this.isChecked);
  }

}
