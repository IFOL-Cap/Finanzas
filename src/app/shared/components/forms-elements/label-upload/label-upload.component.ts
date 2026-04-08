import { Component, Input } from '@angular/core';
import { LabelHelp } from '../../../interfaces';
import { LabelHelpComponent } from '../../messages-display/label-help/label-help.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-label-upload',
  standalone: true,
  imports: [LabelHelpComponent, FormsModule],
  templateUrl: './label-upload.component.html',
  styleUrl: './label-upload.component.css'
})
export class LabelUploadComponent {
  nameFile: string = '';
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

  submitfile(e: any) {
    this.nameFile = e.target.files[0].name;
  }

  deleteFile(){

    this.nameFile = ''
    
  }
}
