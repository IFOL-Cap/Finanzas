import { Component } from '@angular/core';
import { RequiredInfoComponent } from '../../../shared/components/messages-display/required-info/required-info.component';
import { EmisionFormComponent } from '../components/emision-form/emision-form.component';
import { RequiredInfo } from '../../../shared/interfaces';

@Component({
  selector: 'app-emision-page',
  standalone: true,
  imports: [
      RequiredInfoComponent,
      EmisionFormComponent,
    ],
  templateUrl: './emision-page.component.html',
  styleUrl: './emision-page.component.css'
})
export class EmisionPageComponent {

requiredInfo: RequiredInfo = {
    message: `Nota: Los campos marcados con un asterisco (*) son obligatorios.`,
    isCustom: false,
  };
}
