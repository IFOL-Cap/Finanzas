import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consulta-xml',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consulta-xml.component.html',
  styleUrl: './consulta-xml.component.css'
})
export class ConsultaXmlComponent {
  solicitudForm = {
    numeroFianza: '',
    endoso: ''
  };

  obtenerSolicitud() {
    // Placeholder para integrar con la consulta real.
    console.log('Obtener solicitud', this.solicitudForm);
  }

}
