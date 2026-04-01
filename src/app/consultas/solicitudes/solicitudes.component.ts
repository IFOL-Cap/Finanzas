import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent {
  solicitudForm = {
    solicitudNo: '',
    endoso: ''
  };

  verSolicitud() {
    // Placeholder para integrar con consulta real.
    console.log('Consultar solicitud', this.solicitudForm);
  }

}
