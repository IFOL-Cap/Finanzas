import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/buttons/button/button.component';
import { LabelInputComponent } from '../../../shared/components/forms-elements/label-input/label-input.component';
import { LabelButtonsGroupComponent } from '../../../shared/components/forms-elements/label-buttons-group/label-buttons-group.component';

@Component({
  selector: 'app-busqueda-form',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    LabelInputComponent,
    LabelButtonsGroupComponent,
  ],
  templateUrl: './busqueda-form.component.html',
  styles: []
})
export class BusquedaFormComponent {
  public tipoPersona: boolean = true;

  tipoPersonaSelection(selectedOption: any): void {
    console.log('tipo persona selected: ' + selectedOption);
    if (selectedOption === 1) {
      this.tipoPersona = true;
    } else {
      this.tipoPersona = false;
    }
  }
}
