import { Component } from '@angular/core';
import { RequiredInfo } from '../../../shared/interfaces';
import { RequiredInfoComponent } from '../../../shared/components/messages-display/required-info/required-info.component';
import { CotizacionFormComponent } from '../components/cotizacion-form/cotizacion-form.component';

@Component({
  selector: 'app-cotizacion-page',
  standalone: true,
  imports: [
        RequiredInfoComponent,
      CotizacionFormComponent,
      ],
  templateUrl: './cotizacion-page.component.html',
  styleUrl: './cotizacion-page.component.css'
})
export class CotizacionPageComponent {
requiredInfo: RequiredInfo = {
    message: `Nota: Los campos marcados con un asterisco (*) son obligatorios.`,
    isCustom: false,
  };
}
