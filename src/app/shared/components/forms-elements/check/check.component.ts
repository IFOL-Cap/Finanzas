import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-check',
  standalone: true,
  imports: [],
  templateUrl: './check.component.html',
  styleUrl: './check.component.css'
})
export class CheckComponent {
  @Output() checked = new EventEmitter<boolean>();
  onChange(event: Event){
    const input = event.target as HTMLInputElement;
    this.checked.emit(input.checked);
  }

}
