import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LabelHelp, RadioI } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LabelHelpComponent } from "../../messages-display/label-help/label-help.component";

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule, FormsModule, LabelHelpComponent],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css'
})
export class RadioComponent {
  @Input() radioConf: RadioI = {
    title: '',
    isChecked: false,
    isCustom:false
  }
  @Input() labelHelp: LabelHelp = {
      idTool:'idToolExa',
      isRequired: false,
      isWithHelp: false,
      isWithSubtitle: false,
      title: '',
      subtitle: '',
      position: 'top',
      helpMsg: '',
    }
    
  @Output() radioChecked = new EventEmitter<boolean>();

  changeRadio(event: any) {
    this.radioChecked.emit(this.radioConf.isChecked);
  }
}
