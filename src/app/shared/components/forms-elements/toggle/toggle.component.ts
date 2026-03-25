import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormElement } from '../../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  @Input() toggleConfig: FormElement = {
    type: '',
    isrequied: false,
    placeHolder: '',
    isDisable: false,
    isHidden: false,
    itemsEnd : true,
  }
  @Output() isCheckedToggle = new EventEmitter<boolean>();

  changeCheck() {
    this.toggleConfig.isChecked = !this.toggleConfig.isChecked
    this.isCheckedToggle.emit(this.toggleConfig.isChecked);
  }
}
