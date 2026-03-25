import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Encabezado } from '../../../interfaces';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encabezado.component.html'
})
export class EncabezadoComponent {

  @Input() encaberzadoConfig: Encabezado = {
    title: '',
    colorRed: false,
    isIcon: false,
    isGuion: false,
    isCheck: false,
  }
}
