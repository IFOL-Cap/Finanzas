import { Component } from '@angular/core';
import { LabelInputComponent } from '../../../shared/components/forms-elements/label-input/label-input.component';
import { LabelUploadComponent } from '../../../shared/components/forms-elements/label-upload/label-upload.component';
import { ButtonComponent } from '../../../shared/components/buttons/button/button.component';
import { LabelSelectComponent } from '../../../shared/components/forms-elements/label-select/label-select.component';

@Component({
  selector: 'app-im-issuance-emission-data',
  standalone: true,
  imports: [
    LabelInputComponent, 
        LabelUploadComponent, 
        ButtonComponent,
        LabelSelectComponent
  ],
  templateUrl: './im-issuance-emission-data.component.html',
  styleUrl: './im-issuance-emission-data.component.css'
})
export class ImIssuanceEmissionDataComponent {

}
