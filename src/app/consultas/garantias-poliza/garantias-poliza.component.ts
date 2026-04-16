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
import { AccordionReusableItemComponent } from '../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component';
import { AccordionReusableComponent } from '../../shared/components/accordion-reusable/accordion-reusable.component';
import { MatExpansionModule } from '@angular/material/expansion';

interface GarantiaDetalleItem {
  descripcion: string;
  montoConsumido: string;
  responsable: string;
}

interface MovimientoItem {
  movimiento: string;
  montoMovimiento: string;
  estatus: string;
  numSpto: string;
  numApli: string;
  numSptoApli: string;
  garantias: string;
  detalle: GarantiaDetalleItem;
}

@Component({
  selector: 'app-garantias-poliza',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LabelInputComponent,
    LabelCheckboxComponent,
    ButtonComponent,
    AccordionReusableComponent,
    AccordionReusableItemComponent,
    MatExpansionModule,
  ],
  templateUrl: './garantias-poliza.component.html',
  styleUrl: './garantias-poliza.component.css'
})
export class GarantiasPolizaComponent {
  public busquedaForm: FormGroup;

  movimientos: MovimientoItem[] = [
    {
      movimiento: 'Movimiento 001',
      montoMovimiento: '$ 15,000.00',
      estatus: 'Vigente',
      numSpto: 'SPT-1001',
      numApli: 'APL-2201',
      numSptoApli: 'SA-301',
      garantias: 'Fiel Cumplimiento',
      detalle: {
        descripcion: 'Aplicacion de garantia por incumplimiento parcial.',
        montoConsumido: '$ 3,000.00',
        responsable: 'Area de Siniestros'
      }
    },
    {
      movimiento: 'Movimiento 002',
      montoMovimiento: '$ 8,500.00',
      estatus: 'En proceso',
      numSpto: 'SPT-1002',
      numApli: 'APL-2202',
      numSptoApli: 'SA-302',
      garantias: 'Anticipo',
      detalle: {
        descripcion: 'Revision de garantia para liberacion de recurso.',
        montoConsumido: '$ 1,200.00',
        responsable: 'Mesa de Control'
      }
    }
  ];

  modalAbierto = false;
  detalleSeleccionado: GarantiaDetalleItem | null = null;

  constructor(private fb: FormBuilder) {
    this.busquedaForm = this.fb.group({
      numeroPoliza: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(60)],
        updateOn: 'blur',
      }),
      soloVigentes: new FormControl<boolean>(false),
    });
  }

  get numeroPolizaCtrl(): FormControl<string | null> {
    return this.busquedaForm.get('numeroPoliza') as FormControl<string | null>;
  }

  onSoloVigentesChange(value: boolean): void {
    this.busquedaForm.get('soloVigentes')?.setValue(value);
  }

  buscarPoliza(): void {
    if (this.busquedaForm.invalid) {
      this.busquedaForm.markAllAsTouched();
      this.busquedaForm.updateValueAndValidity();
      return;
    }

    console.log('Buscar poliza', this.busquedaForm.value);
  }

  limpiarBusqueda(): void {
    this.busquedaForm.reset({
      numeroPoliza: '',
      soloVigentes: false,
    });
  }

  abrirDetalle(detalle: GarantiaDetalleItem) {
    this.detalleSeleccionado = detalle;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.detalleSeleccionado = null;
  }

}
