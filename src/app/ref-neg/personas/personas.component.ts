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
import { LabelSelectComponent } from '../../shared/components/forms-elements/label-select/label-select.component';
import { LabelCheckboxComponent } from '../../shared/components/forms-elements/label-checkbox/label-checkbox.component';
import { LabelHelpComponent } from '../../shared/components/messages-display/label-help/label-help.component';
import { DateComponent } from '../../shared/components/forms-elements/date/date.component';
import { ButtonComponent } from '../../shared/components/buttons/button/button.component';
import { AccordionReusableItemComponent } from '../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component';
import { AccordionReusableComponent } from '../../shared/components/accordion-reusable/accordion-reusable.component';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LabelInputComponent,
    LabelSelectComponent,
    LabelCheckboxComponent,
    LabelHelpComponent,
    DateComponent,
    ButtonComponent,
    AccordionReusableComponent,
    AccordionReusableItemComponent,
  ],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  public filtroForm: FormGroup;
  public agregarPersonaForm: FormGroup;

  ramas = [
    { value: 'administrativas', display: 'Administrativas' },
    { value: 'fidelidad', display: 'Fidelidad' },
    { value: 'judiciales', display: 'Judiciales' },
  ];

  afianzadoras = [
    { value: 'mapfre', display: 'MAPFRE Fianzas' },
    { value: 'atlas', display: 'Aseguradora Atlas' },
    { value: 'aserta', display: 'Afianzadora Aserta' },
  ];

  tiposPersona = [
    { value: 'fisica', display: 'Fisica' },
    { value: 'moral', display: 'Moral' },
  ];

  paises = [
    { value: 'mx', display: 'Mexico' },
    { value: 'us', display: 'Estados Unidos' },
  ];

  estados = [
    { value: 'cdmx', display: 'Ciudad de Mexico' },
    { value: 'edomex', display: 'Estado de Mexico' },
    { value: 'jalisco', display: 'Jalisco' },
  ];

  municipios = [
    { value: 'cuauhtemoc', display: 'Cuauhtemoc' },
    { value: 'miguel-hidalgo', display: 'Miguel Hidalgo' },
    { value: 'guadalajara', display: 'Guadalajara' },
  ];

  modalAgregarAbierto = false;
  modalBorradoAbierto = false;
  modalCausasAbierto = false;
  nombreFiadoSeleccionado = '';
  afianzadoraSeleccionada = '';
  causasDetalle: Array<{ clave: string; descripcion: string }> = [];

  constructor(private fb: FormBuilder) {
    this.filtroForm = this.fb.group({
      criterioBusqueda: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(120)],
        updateOn: 'blur',
      }),
      buscarPorRfc: new FormControl<boolean>(false),
    });

    this.agregarPersonaForm = this.fb.group({
      ramo: new FormControl<string | null>('', {
        validators: [Validators.required],
      }),
      afianzadora: new FormControl<string | null>('', {
        validators: [Validators.required],
      }),
      tipoPersona: new FormControl<string | null>('', {
        validators: [Validators.required],
      }),
      numeroCircular: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(60)],
        updateOn: 'blur',
      }),
      fechaAlta: new FormControl<string | null>('', {
        validators: [Validators.required],
      }),
      fechaVencimiento: new FormControl<string | null>('', {
        validators: [Validators.required],
      }),
      numeroFiado: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(120)],
        updateOn: 'blur',
      }),
      rfcFiado: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(20)],
        updateOn: 'blur',
      }),
      calle: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(120)],
        updateOn: 'blur',
      }),
      numExterior: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(20)],
        updateOn: 'blur',
      }),
      numInterior: new FormControl<string | null>('', {
        validators: [Validators.maxLength(20)],
        updateOn: 'blur',
      }),
      colonia: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(120)],
        updateOn: 'blur',
      }),
      codigoPostal: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(10)],
        updateOn: 'blur',
      }),
      pais: new FormControl<string | null>('', {
        validators: [Validators.required],
      }),
      estado: new FormControl<string | null>('', {
        validators: [Validators.required],
      }),
      municipio: new FormControl<string | null>('', {
        validators: [Validators.required],
      }),
    });
  }

  get criterioBusquedaCtrl(): FormControl<string | null> {
    return this.filtroForm.get('criterioBusqueda') as FormControl<string | null>;
  }

  get numeroCircularCtrl(): FormControl<string | null> {
    return this.agregarPersonaForm.get('numeroCircular') as FormControl<string | null>;
  }

  get numeroFiadoCtrl(): FormControl<string | null> {
    return this.agregarPersonaForm.get('numeroFiado') as FormControl<string | null>;
  }

  get rfcFiadoCtrl(): FormControl<string | null> {
    return this.agregarPersonaForm.get('rfcFiado') as FormControl<string | null>;
  }

  get calleCtrl(): FormControl<string | null> {
    return this.agregarPersonaForm.get('calle') as FormControl<string | null>;
  }

  get numExteriorCtrl(): FormControl<string | null> {
    return this.agregarPersonaForm.get('numExterior') as FormControl<string | null>;
  }

  get numInteriorCtrl(): FormControl<string | null> {
    return this.agregarPersonaForm.get('numInterior') as FormControl<string | null>;
  }

  get coloniaCtrl(): FormControl<string | null> {
    return this.agregarPersonaForm.get('colonia') as FormControl<string | null>;
  }

  get codigoPostalCtrl(): FormControl<string | null> {
    return this.agregarPersonaForm.get('codigoPostal') as FormControl<string | null>;
  }

  get fechaAltaCtrl(): FormControl<string | null> {
    return this.agregarPersonaForm.get('fechaAlta') as FormControl<string | null>;
  }

  get fechaVencimientoCtrl(): FormControl<string | null> {
    return this.agregarPersonaForm.get('fechaVencimiento') as FormControl<string | null>;
  }

  onBuscarPorRfcChange(value: boolean): void {
    this.filtroForm.get('buscarPorRfc')?.setValue(value);
  }

  onSelectAgregarChange(
    controlName: 'ramo' | 'afianzadora' | 'tipoPersona' | 'pais' | 'estado' | 'municipio',
    value: string
  ): void {
    this.agregarPersonaForm.get(controlName)?.setValue(value);
  }

  onFechaAltaChange(value: string): void {
    this.agregarPersonaForm.get('fechaAlta')?.setValue(value);
  }

  onFechaVencimientoChange(value: string): void {
    this.agregarPersonaForm.get('fechaVencimiento')?.setValue(value);
  }

  buscarPersonas(): void {
    if (this.filtroForm.invalid) {
      this.filtroForm.markAllAsTouched();
      this.filtroForm.updateValueAndValidity();
      return;
    }

    console.log('Buscar personas', this.filtroForm.value);
  }

  limpiarFiltros(): void {
    this.filtroForm.reset({
      criterioBusqueda: '',
      buscarPorRfc: false,
    });
  }

  abrirModalAgregar(): void {
    this.limpiarAgregarForm();
    this.modalAgregarAbierto = true;
  }

  cerrarModalAgregar(): void {
    this.modalAgregarAbierto = false;
  }

  limpiarAgregarForm(): void {
    this.agregarPersonaForm.reset({
      ramo: '',
      afianzadora: '',
      tipoPersona: '',
      numeroCircular: '',
      fechaAlta: '',
      fechaVencimiento: '',
      numeroFiado: '',
      rfcFiado: '',
      calle: '',
      numExterior: '',
      numInterior: '',
      colonia: '',
      codigoPostal: '',
      pais: '',
      estado: '',
      municipio: '',
    });
  }

  guardarPersona(): void {
    if (this.agregarPersonaForm.invalid) {
      this.agregarPersonaForm.markAllAsTouched();
      this.agregarPersonaForm.updateValueAndValidity();
      return;
    }

    console.log('Guardar persona', this.agregarPersonaForm.value);
    this.cerrarModalAgregar();
  }

  abrirModalBorrado(): void {
    this.modalBorradoAbierto = true;
  }

  cerrarModalBorrado(): void {
    this.modalBorradoAbierto = false;
  }

  confirmarBorrado(): void {
    this.modalBorradoAbierto = false;
  }

  abrirModalCausas(nombreFiado: string, afianzadora: string): void {
    this.nombreFiadoSeleccionado = nombreFiado;
    this.afianzadoraSeleccionada = afianzadora;
    this.causasDetalle = [
      { clave: 'C001', descripcion: 'Incumplimiento de pago' },
      { clave: 'C002', descripcion: 'Falta de documentacion' },
      { clave: 'C003', descripcion: 'Estatus juridico en revision' }
    ];
    this.modalCausasAbierto = true;
  }

  cerrarModalCausas(): void {
    this.modalCausasAbierto = false;
  }

  borrarCausa(index: number): void {
    this.causasDetalle = this.causasDetalle.filter((_, i) => i !== index);
  }

}
