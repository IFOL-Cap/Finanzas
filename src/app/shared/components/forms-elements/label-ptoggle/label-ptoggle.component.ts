import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LabelHelpComponent } from "../../messages-display/label-help/label-help.component";
import { GenericType, LabelHelp, LabelToggleI } from '../../../interfaces';
import { ProtectedToggleComponent } from "../protected-toggle/protected-toggle.component";
import { QuestionLinkComponent } from '../../question-link/question-link.component';


@Component({
  selector: 'app-label-ptoggle',
  standalone: true,
  imports: [LabelHelpComponent, ProtectedToggleComponent, QuestionLinkComponent],
  templateUrl: './label-ptoggle.component.html',
  styleUrl: './label-ptoggle.component.css'
})
export class LabelPtoggleComponent {
  @Input() labelPToggleConf = {
    isWithLinks: true,
    links: [{
      title: '',
      isUnderline: false,
      isCustom: false,
      configMdl: {
        isOpen: false,
        title: '',
        type: GenericType.money,
        isAceptBtn: false

                }
    }],
  }
  @Input() labelHelp: LabelHelp = {
    idTool:'idExample',
    isRequired: false,
    isWithHelp: false,
    isWithSubtitle: false,
    title: '',
    subtitle: '',
    position: 'top',
    helpMsg: '',
  }
  @Input() pToggleConfg : LabelToggleI = {
    title: '',
    isChecked: true,
    display: '',
    title2: '',
    isWithToggle: true
  };
  @Output() isCheckedtoogle = new EventEmitter<boolean>();
  onCheckedToggle(isChecked: boolean) {
    this.isCheckedtoogle.emit(isChecked)
  }

}
