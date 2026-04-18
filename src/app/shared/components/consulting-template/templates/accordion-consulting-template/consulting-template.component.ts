import { Component } from '@angular/core';
import { LabelInputComponent } from '../../../forms-elements/label-input/label-input.component';
import { LabelPtoggleComponent } from '../../../forms-elements/label-ptoggle/label-ptoggle.component';
import { CommonModule } from '@angular/common';
import { catchError, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-consulting-template',
  standalone: true,
  imports: [CommonModule, LabelInputComponent, LabelPtoggleComponent],
  templateUrl: './consulting-template.component.html',
  styleUrl: './consulting-template.component.css',
})
export class ConsultingTemplateComponent {
  estructura$!: Observable<any>;
  columnas: any[] = [];
  detalle: any[] = [];
  errorMsg = '';

  constructor() {}

  ngOnInit() {}
}
