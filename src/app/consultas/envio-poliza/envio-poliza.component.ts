import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-envio-poliza',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './envio-poliza.component.html',
  styleUrl: './envio-poliza.component.css'
})
export class EnvioPolizaComponent {
  envioForm = {
    fianzaNo: '',
    endoso: '',
    asunto: '',
    destinatarios: '',
    omitirVigencia: false,
    comentario: ''
  };

  limpiarFormulario() {
    this.envioForm = {
      fianzaNo: '',
      endoso: '',
      asunto: '',
      destinatarios: '',
      omitirVigencia: false,
      comentario: ''
    };
  }

  enviarCorreo() {
    // Placeholder de envío: se integrará con servicio/backend de correo.
    console.log('Formulario de envio', this.envioForm);
  }

}
