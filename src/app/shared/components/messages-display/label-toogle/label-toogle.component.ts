import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LabelToggleI } from '../../../interfaces';
import { ToggleComponent } from '../../forms-elements/toggle/toggle.component';

@Component({
  selector: 'app-label-toogle',
  standalone: true,
  imports: [ToggleComponent],
  templateUrl: './label-toogle.component.html',
  styleUrl: './label-toogle.component.css'
})
export class LabelToogleComponent {
  @Input() labelToglleConfig: LabelToggleI = {
    title: '',
    subtitle: '',
    isWithSubtitle: false,
    display: '',
    isChecked: false
  }

  @Output() toggleChange = new EventEmitter<boolean>();

  onToggleChange(event: boolean) {
    this.toggleChange.emit(event);
  }
}
