import { Component } from '@angular/core';
import { LabelInputComponent } from '../../../../shared/components/forms-elements/label-input/label-input.component';
import { ButtonComponent } from '../../../../shared/components/buttons/button/button.component';
import { LabelSelectComponent } from '../../../../shared/components/forms-elements/label-select/label-select.component';
import { LabelHelpComponent } from '../../../../shared/components/messages-display/label-help/label-help.component';
import { DateComponent } from '../../../../shared/components/forms-elements/date/date.component';
import { InputComponent } from '../../../../shared/components/forms-elements/input/input.component';
import { LabelCheckboxComponent } from '../../../../shared/components/forms-elements/label-checkbox/label-checkbox.component';

@Component({
  selector: 'app-cotizacion-form',
  standalone: true,
  imports: [
    LabelInputComponent,
    ButtonComponent,
    LabelSelectComponent,
    LabelHelpComponent,
    DateComponent,
    InputComponent,
    LabelCheckboxComponent,
  ],
  templateUrl: './cotizacion-form.component.html',
  styleUrl: './cotizacion-form.component.css',
})
export class CotizacionFormComponent {
  changeCheck(event: any) {}
}
