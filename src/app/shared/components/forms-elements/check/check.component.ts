import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-check',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './check.component.html',
  styleUrl: './check.component.css'
})
export class CheckComponent {
  @Input() form!: FormGroup | null ;
  @Input() controlName!: string | null;
  @Input() title!: string;
  @Input() isChecked: boolean = false;
  @Output() checked = new EventEmitter<boolean>();

  changeCheck(event: Event) {
    const input = event.target as HTMLInputElement;
    this.isChecked = input.checked;
    this.checked.emit(this.isChecked);
  }
}
