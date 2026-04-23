import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LabelInputComponent } from '../../../shared/components/forms-elements/label-input/label-input.component';
import { LabelUploadComponent } from '../../../shared/components/forms-elements/label-upload/label-upload.component';
import { ButtonComponent } from '../../../shared/components/buttons/button/button.component';
import { LabelSelectComponent } from '../../../shared/components/forms-elements/label-select/label-select.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta-terceros-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LabelInputComponent,
    LabelUploadComponent,
    ButtonComponent,
    LabelSelectComponent,
  ],
  templateUrl: './alta-terceros-form.component.html',
  styleUrl: './alta-terceros-form.component.css',
})
export class AltaTercerosFormComponent {
  tipoPersona = signal<'fisica' | 'moral'>('fisica');

  public altaTercerosForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.altaTercerosForm = this.fb.group({
      // --- Física ---
      nombres: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(100)],
        updateOn: 'blur',
      }),
      primerApellido: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(60)],
        updateOn: 'blur',
      }),
      segundoApellido: new FormControl<string | null>('', {
        validators: [Validators.maxLength(60)],
        updateOn: 'blur',
      }),
      fechaNacimiento: new FormControl<string | null>('', {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
      rfcFisica: new FormControl<string | null>('', {
        validators: [Validators.maxLength(13)],
        updateOn: 'blur',
      }),
      curp: new FormControl<string | null>('', {
        validators: [Validators.maxLength(18)],
        updateOn: 'blur',
      }),
      sexo: new FormControl<string | null>(null),
      nacionalidadFisica: new FormControl<string | null>(null),
      estadoCivil: new FormControl<string | null>(null),
      profesion: new FormControl<string | null>('', {
        validators: [Validators.maxLength(100)],
        updateOn: 'blur',
      }),
      telCelular: new FormControl<string | null>('', {
        validators: [Validators.maxLength(10)],
        updateOn: 'blur',
      }),
      paisNacimiento: new FormControl<string | null>(null),
      tipoIdentificacionFisica: new FormControl<string | null>(null),
      noIdentificacionFisica: new FormControl<string | null>('', {
        validators: [Validators.maxLength(60)],
        updateOn: 'blur',
      }),
      // --- Moral ---
      razonSocial: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(200)],
        updateOn: 'blur',
      }),
      fechaConstitucion: new FormControl<string | null>('', {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
      rfcMoral: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(13)],
        updateOn: 'blur',
      }),
      giroActividad: new FormControl<string | null>('', {
        validators: [Validators.maxLength(100)],
        updateOn: 'blur',
      }),
      nacionalidadMoral: new FormControl<string | null>(null),
      nombreContacto: new FormControl<string | null>('', {
        validators: [Validators.maxLength(100)],
        updateOn: 'blur',
      }),
      folioMercantil: new FormControl<string | null>('', {
        validators: [Validators.maxLength(60)],
        updateOn: 'blur',
      }),
      representanteLegal: new FormControl<string | null>('', {
        validators: [Validators.maxLength(100)],
        updateOn: 'blur',
      }),
      tipoIdentificacionMoral: new FormControl<string | null>(null),
      noIdentificacionMoral: new FormControl<string | null>('', {
        validators: [Validators.maxLength(60)],
        updateOn: 'blur',
      }),
      observaciones: new FormControl<string | null>('', {
        validators: [Validators.maxLength(500)],
        updateOn: 'blur',
      }),
      // --- Compartidos ---
      domicilio: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(200)],
        updateOn: 'blur',
      }),
      numExterior: new FormControl<string | null>('', {
        validators: [Validators.maxLength(20)],
        updateOn: 'blur',
      }),
      numInterior: new FormControl<string | null>('', {
        validators: [Validators.maxLength(20)],
        updateOn: 'blur',
      }),
      colonia: new FormControl<string | null>('', {
        validators: [Validators.maxLength(100)],
        updateOn: 'blur',
      }),
      pais: new FormControl<string | null>(null, [Validators.required]),
      lada: new FormControl<string | null>('', {
        validators: [Validators.maxLength(3)],
        updateOn: 'blur',
      }),
      telefono: new FormControl<string | null>('', {
        validators: [Validators.maxLength(8)],
        updateOn: 'blur',
      }),
      cp: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(5)],
        updateOn: 'blur',
      }),
      estado: new FormControl<string | null>(null, [Validators.required]),
      delegacionMunicipio: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(100)],
        updateOn: 'blur',
      }),
      correoElectronico: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.email, Validators.maxLength(100)],
        updateOn: 'blur',
      }),
    });
  }

  // --- Getters física ---
  get nombres(): FormControl<string | null> { return this.altaTercerosForm.get('nombres') as FormControl<string | null>; }
  get primerApellido(): FormControl<string | null> { return this.altaTercerosForm.get('primerApellido') as FormControl<string | null>; }
  get segundoApellido(): FormControl<string | null> { return this.altaTercerosForm.get('segundoApellido') as FormControl<string | null>; }
  get fechaNacimiento(): FormControl<string | null> { return this.altaTercerosForm.get('fechaNacimiento') as FormControl<string | null>; }
  get rfcFisica(): FormControl<string | null> { return this.altaTercerosForm.get('rfcFisica') as FormControl<string | null>; }
  get curp(): FormControl<string | null> { return this.altaTercerosForm.get('curp') as FormControl<string | null>; }
  get profesion(): FormControl<string | null> { return this.altaTercerosForm.get('profesion') as FormControl<string | null>; }
  get telCelular(): FormControl<string | null> { return this.altaTercerosForm.get('telCelular') as FormControl<string | null>; }
  get noIdentificacionFisica(): FormControl<string | null> { return this.altaTercerosForm.get('noIdentificacionFisica') as FormControl<string | null>; }

  // --- Getters moral ---
  get razonSocial(): FormControl<string | null> { return this.altaTercerosForm.get('razonSocial') as FormControl<string | null>; }
  get fechaConstitucion(): FormControl<string | null> { return this.altaTercerosForm.get('fechaConstitucion') as FormControl<string | null>; }
  get rfcMoral(): FormControl<string | null> { return this.altaTercerosForm.get('rfcMoral') as FormControl<string | null>; }
  get giroActividad(): FormControl<string | null> { return this.altaTercerosForm.get('giroActividad') as FormControl<string | null>; }
  get nombreContacto(): FormControl<string | null> { return this.altaTercerosForm.get('nombreContacto') as FormControl<string | null>; }
  get folioMercantil(): FormControl<string | null> { return this.altaTercerosForm.get('folioMercantil') as FormControl<string | null>; }
  get representanteLegal(): FormControl<string | null> { return this.altaTercerosForm.get('representanteLegal') as FormControl<string | null>; }
  get noIdentificacionMoral(): FormControl<string | null> { return this.altaTercerosForm.get('noIdentificacionMoral') as FormControl<string | null>; }
  get observaciones(): FormControl<string | null> { return this.altaTercerosForm.get('observaciones') as FormControl<string | null>; }

  // --- Getters compartidos ---
  get domicilio(): FormControl<string | null> { return this.altaTercerosForm.get('domicilio') as FormControl<string | null>; }
  get numExterior(): FormControl<string | null> { return this.altaTercerosForm.get('numExterior') as FormControl<string | null>; }
  get numInterior(): FormControl<string | null> { return this.altaTercerosForm.get('numInterior') as FormControl<string | null>; }
  get colonia(): FormControl<string | null> { return this.altaTercerosForm.get('colonia') as FormControl<string | null>; }
  get lada(): FormControl<string | null> { return this.altaTercerosForm.get('lada') as FormControl<string | null>; }
  get telefono(): FormControl<string | null> { return this.altaTercerosForm.get('telefono') as FormControl<string | null>; }
  get cp(): FormControl<string | null> { return this.altaTercerosForm.get('cp') as FormControl<string | null>; }
  get delegacionMunicipio(): FormControl<string | null> { return this.altaTercerosForm.get('delegacionMunicipio') as FormControl<string | null>; }
  get correoElectronico(): FormControl<string | null> { return this.altaTercerosForm.get('correoElectronico') as FormControl<string | null>; }

  onTipoPersonaChange(value: string): void {
    if (value === 'fisica' || value === 'moral') {
      this.tipoPersona.set(value);
    }
  }

  limpiarFormulario(): void {
    this.tipoPersona.set('fisica');
    this.altaTercerosForm.reset({
      sexo: null,
      nacionalidadFisica: null,
      estadoCivil: null,
      paisNacimiento: null,
      tipoIdentificacionFisica: null,
      nacionalidadMoral: null,
      tipoIdentificacionMoral: null,
      pais: null,
      estado: null,
    });
  }

  registrar(): void {
    if (this.altaTercerosForm.invalid) {
      this.altaTercerosForm.markAllAsTouched();
      this.altaTercerosForm.updateValueAndValidity();
      return;
    }
    console.log('Alta Terceros - registrar:', this.altaTercerosForm.value);
  }
}
