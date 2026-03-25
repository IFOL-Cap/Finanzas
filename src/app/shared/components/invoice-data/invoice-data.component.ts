import { Component } from '@angular/core';
import { LabelButtonsGroupComponent } from "../forms-elements/label-buttons-group/label-buttons-group.component";
import { LabelInputComponent } from "../forms-elements/label-input/label-input.component";
import { LabelHelpComponent } from "../messages-display/label-help/label-help.component";
import { InputComponent } from "../forms-elements/input/input.component";
import { LabelSelectComponent } from "../forms-elements/label-select/label-select.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-data',
  standalone: true,
  imports: [LabelButtonsGroupComponent, LabelInputComponent, LabelHelpComponent, 
    InputComponent, LabelSelectComponent, CommonModule],
  templateUrl: './invoice-data.component.html',
  styleUrl: './invoice-data.component.css'
})
export class InvoiceDataComponent {

   personType: boolean= true;

   getTypeOfPerson(event: any){
    //true Persona Física, false Persona Moral
    this.personType = event;
  }

}
