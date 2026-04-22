import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LabelInputComponent } from '../../../shared/components/forms-elements/label-input/label-input.component';
import { TextareaComponent } from '../../../shared/components/forms-elements/textarea/textarea.component';
import { LabelHelpComponent } from '../../../shared/components/messages-display/label-help/label-help.component';
import { ButtonComponent } from '../../../shared/components/buttons/button/button.component';

@Component({
  selector: 'app-admin-profile-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LabelInputComponent,
    TextareaComponent,
    LabelHelpComponent,
    ButtonComponent,
  ],
  templateUrl: './admin-profile-form.component.html',
  styleUrl: './admin-profile-form.component.css',
})
export class AdminProfileFormComponent {
  @Output() enviarFormularioEvent = new EventEmitter<FormGroup>();
  @Output() limpiarFormularioEvent = new EventEmitter<void>();

  public profileForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.profileForm = this.fb.group({
      nombre: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(120)],
        updateOn: 'blur',
      }),
      descripcion: new FormControl<string | null>('', {
        validators: [Validators.maxLength(250)],
        updateOn: 'blur',
      }),
    });
  }

  get nombre(): FormControl<string | null> {
    return this.profileForm.get('nombre') as FormControl<string | null>;
  }

  get descripcion(): FormControl<string | null> {
    return this.profileForm.get('descripcion') as FormControl<string | null>;
  }

  limpiarFormulario(): void {
    this.profileForm.reset({
      nombre: '',
      descripcion: '',
    });

    this.limpiarFormularioEvent.emit();
  }

  enviarFormulario(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.profileForm.updateValueAndValidity();
      return;
    }

    this.enviarFormularioEvent.emit(this.profileForm);
    console.log('AdminProfileForm - enviarFormulario', this.profileForm.value);
  }
}
