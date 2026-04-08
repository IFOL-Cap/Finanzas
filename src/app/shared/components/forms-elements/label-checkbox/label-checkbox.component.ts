import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LabelHelpComponent } from '../../messages-display/label-help/label-help.component';
import { CheckComponent } from '../check/check.component';
import { LabelHelp } from '../../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label-checkbox',
  standalone: true,
  imports: [CommonModule, LabelHelpComponent, CheckComponent],
  templateUrl: './label-checkbox.component.html',
  styleUrl: './label-checkbox.component.css'
})
export class LabelCheckboxComponent {
  @Input() labelCheck!: string;
  @Input() itemsChecks = [
      {
        labeltitle: ''
      }
    ]
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

  @Output() isChecked = new EventEmitter<boolean>();

  change(value: any){
    this.isChecked.emit(value);
  }
}
