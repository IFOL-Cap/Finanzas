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
import { LabelCheckboxComponent } from '../../shared/components/forms-elements/label-checkbox/label-checkbox.component';
import { ButtonComponent } from '../../shared/components/buttons/button/button.component';
import { LabelTextAreaComponent } from '../../shared/components/forms-elements/label-text-area/label-text-area.component';
import { AccordionReusableItemComponent } from '../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component';
import { AccordionReusableComponent } from '../../shared/components/accordion-reusable/accordion-reusable.component';

@Component({
  selector: 'app-envio-poliza',
  standalone: true,
  imports: [CommonModule, FormsModule, LabelInputComponent, LabelCheckboxComponent, ButtonComponent, LabelTextAreaComponent, AccordionReusableComponent, AccordionReusableItemComponent],
  templateUrl: './envio-poliza.component.html',
  styleUrl: './envio-poliza.component.css'
})
export class EnvioPolizaComponent {
  public envioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.envioForm = this.fb.group({
      fianzaNo: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(60)],
        updateOn: 'blur',
      }),
      endoso: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(60)],
        updateOn: 'blur',
      }),
      asunto: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(120)],
        updateOn: 'blur',
      }),
      destinatarios: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(250)],
        updateOn: 'blur',
      }),
      omitirVigencia: new FormControl<boolean>(false),
      comentario: new FormControl<string | null>(''),
    });
  }

  get fianzaNoCtrl(): FormControl<string | null> {
    return this.envioForm.get('fianzaNo') as FormControl<string | null>;
  }

  get endosoCtrl(): FormControl<string | null> {
    return this.envioForm.get('endoso') as FormControl<string | null>;
  }

  get asuntoCtrl(): FormControl<string | null> {
    return this.envioForm.get('asunto') as FormControl<string | null>;
  }

  get destinatariosCtrl(): FormControl<string | null> {
    return this.envioForm.get('destinatarios') as FormControl<string | null>;
  }

  get comentarioCtrl(): FormControl<string | null> {
    return this.envioForm.get('comentario') as FormControl<string | null>;
  }

  limpiarFormulario() {
    this.envioForm.reset({
      fianzaNo: '',
      endoso: '',
      asunto: '',
      destinatarios: '',
      omitirVigencia: false,
      comentario: '',
    });
  }

  onOmitirVigenciaChange(value: boolean) {
    this.envioForm.get('omitirVigencia')?.setValue(value);
  }

  enviarCorreo() {
    if (this.envioForm.invalid) {
      this.envioForm.markAllAsTouched();
      this.envioForm.updateValueAndValidity();
      return;
    }

    // Placeholder de envío: se integrará con servicio/backend de correo.
    console.log('Formulario de envio', this.envioForm);
  }

}
