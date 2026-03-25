import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-select.component.html'
})
export class ButtonSelectComponent {
  isActive = true;

  select() {
    this.isActive = !this.isActive
  }
}
