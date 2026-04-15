import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { LabelInputComponent } from '../../shared/components/forms-elements/label-input/label-input.component';
import { ButtonComponent } from '../../shared/components/buttons/button/button.component';
import { AccordionReusableItemComponent } from '../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component';
import { AccordionReusableComponent } from '../../shared/components/accordion-reusable/accordion-reusable.component';

@Component({
  selector: 'app-consulta-xml',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LabelInputComponent,
    ButtonComponent,
    AccordionReusableComponent,
    AccordionReusableItemComponent,
  ],
  templateUrl: './consulta-xml.component.html',
  styleUrl: './consulta-xml.component.css',
})
export class ConsultaXmlComponent {
  public solicitudForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.solicitudForm = this.fb.group({
      numeroFianza: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(60)],
        updateOn: 'blur',
      }),
      endoso: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(60)],
        updateOn: 'blur',
      }),
    });
  }

  // Getters tipados para el template
  get numeroFianza(): FormControl<string | null> {
    return this.solicitudForm.get('numeroFianza') as FormControl<string | null>;
  }

  get endoso(): FormControl<string | null> {
    return this.solicitudForm.get('endoso') as FormControl<string | null>;
  }


  obtenerSolicitud() {

    if (this.solicitudForm.invalid)
    {
      this.solicitudForm.markAllAsTouched();
      this.solicitudForm.updateValueAndValidity();
      return;
    }

    // Placeholder para integrar con la consulta real.
    console.log('Obtener solicitud', this.solicitudForm);
  }
}
