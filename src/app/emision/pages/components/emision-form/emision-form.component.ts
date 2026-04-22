import { Component } from '@angular/core';
import { LabelInputComponent } from '../../../../shared/components/forms-elements/label-input/label-input.component';
import { ButtonComponent } from '../../../../shared/components/buttons/button/button.component';
import { Router } from '@angular/router';
import { EncryptedStorageService } from '../../../../shared/services/encrypted-storage.service';
import { LabelSelectComponent } from '../../../../shared/components/forms-elements/label-select/label-select.component';
import { LabelHelpComponent } from "../../../../shared/components/messages-display/label-help/label-help.component";
import { DateComponent } from "../../../../shared/components/forms-elements/date/date.component";
import { LabelCheckboxComponent } from "../../../../shared/components/forms-elements/label-checkbox/label-checkbox.component";
import { InputComponent } from "../../../../shared/components/forms-elements/input/input.component";

@Component({
  selector: 'app-emision-form',
  standalone: true,
  imports: [
    LabelInputComponent,
    ButtonComponent,
    LabelSelectComponent,
    LabelHelpComponent,
    DateComponent,
    LabelCheckboxComponent,
    InputComponent
],
  templateUrl: './emision-form.component.html',
  styleUrl: './emision-form.component.css'
})
export class EmisionFormComponent {
constructor(private router: Router, private localStorage: EncryptedStorageService){}

continue():void
  {
     this.router.navigate(['/im/step2']);
  }

  changeCheck(event: any){}

}
