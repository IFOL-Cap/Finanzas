import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
