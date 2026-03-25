import { Component, Input } from '@angular/core';
import { ItemCompleted, ItemFrom, ItemType } from '../../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-completed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-completed.component.html',
  styleUrl: './item-completed.component.css'
})
export class ItemCompletedComponent {
  @Input() itemCompletedConfig: ItemCompleted = {
    label: '',
    value: '',
    from: ItemFrom.default,
    type: ItemType.none
  };
}
