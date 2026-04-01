import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  modalAgregarAbierto = false;
  modalBorradoAbierto = false;
  modalCausasAbierto = false;
  nombreFiadoSeleccionado = '';
  afianzadoraSeleccionada = '';
  causasDetalle: Array<{ clave: string; descripcion: string }> = [];

  abrirModalAgregar(): void {
    this.modalAgregarAbierto = true;
  }

  cerrarModalAgregar(): void {
    this.modalAgregarAbierto = false;
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
