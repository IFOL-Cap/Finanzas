import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LabelInputComponent } from '../../shared/components/forms-elements/label-input/label-input.component';
import { ButtonComponent } from '../../shared/components/buttons/button/button.component';
import { AccordionReusableItemComponent } from '../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component';
import { AccordionReusableComponent } from '../../shared/components/accordion-reusable/accordion-reusable.component';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [CommonModule, FormsModule, LabelInputComponent, ButtonComponent, AccordionReusableComponent, AccordionReusableItemComponent],
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

  limpiarFormulario() {
    this.solicitudForm = {
      solicitudNo: '',
      endoso: ''
    };
  }

}
