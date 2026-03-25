import { Component, Input } from '@angular/core';
import { LabelData } from '../../../interfaces';

@Component({
  selector: 'app-label-data',
  standalone: true,
  imports: [],
  templateUrl: './label-data.component.html',
  styleUrl: './label-data.component.css'
})
export class LabelDataComponent {
  @Input() labelData: LabelData = {
    labeltitle:'',
    labelInfo: '',
  }
}
