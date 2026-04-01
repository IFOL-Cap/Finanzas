import { Component } from '@angular/core';
import { LabelInputComponent } from '../../shared/components/forms-elements/label-input/label-input.component';
import { ButtonComponent } from '../../shared/components/buttons/button/button.component';
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
  imports: [LabelInputComponent, ButtonComponent, MatExpansionModule],
  templateUrl: './garantias-poliza.component.html',
  styleUrl: './garantias-poliza.component.css'
})
export class GarantiasPolizaComponent {
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

  abrirDetalle(detalle: GarantiaDetalleItem) {
    this.detalleSeleccionado = detalle;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.detalleSeleccionado = null;
  }

}
