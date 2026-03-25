import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HedaersHbsI } from '../../../interfaces';

@Component({
  selector: 'app-hbs-headers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hbs-headers.component.html',
  styleUrl: './hbs-headers.component.css'
})
export class HbsHeadersComponent {
  @Input() headersConf: HedaersHbsI = {
    count: 0,
    titles: []
  }
}
