import { Component } from '@angular/core';
import { StepperComponent } from '../../../shared/components/stepper/stepper.component';
import { LabelInputComponent } from '../../../shared/components/forms-elements/label-input/label-input.component';
import { LabelUploadComponent } from '../../../shared/components/forms-elements/label-upload/label-upload.component';
import { ButtonComponent } from '../../../shared/components/buttons/button/button.component';
import { LabelSelectComponent } from '../../../shared/components/forms-elements/label-select/label-select.component';

@Component({
  selector: 'app-alta-terceros',
  standalone: true,
  imports: [
      LabelInputComponent, 
      LabelUploadComponent, 
      ButtonComponent,
      LabelSelectComponent],
  templateUrl: './alta-terceros.component.html',
  styleUrl: './alta-terceros.component.css'
})
export class AltaTercerosComponent {

}
