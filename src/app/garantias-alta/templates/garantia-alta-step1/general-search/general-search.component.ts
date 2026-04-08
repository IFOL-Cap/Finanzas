import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/buttons/button/button.component';
import { LabelInputComponent } from '../../../../shared/components/forms-elements/label-input/label-input.component';
import { LabelButtonsGroupComponent } from '../../../../shared/components/forms-elements/label-buttons-group/label-buttons-group.component';

@Component({
  selector: 'app-general-search',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    LabelInputComponent,
    LabelButtonsGroupComponent,
  ],
  templateUrl: './general-search.component.html',
  styleUrl: './general-search.component.css'
})
export class GeneralSearchComponent 
{
  public tipoPersona: boolean = true;
  
  tipoPersonaSelection(selectedOption: any): void 
  {
    console.log("tipo persona selected: " + selectedOption);
    if(selectedOption === 1)
    {
      this.tipoPersona = true;
    }
    else
    {
      this.tipoPersona = false;
    }
  }
}
