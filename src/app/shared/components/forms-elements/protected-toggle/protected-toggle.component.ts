import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ToggleComponent } from "../toggle/toggle.component";
import { IconComponent } from "../../core/icon/icon.component";
import { LabelToggleI } from '../../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protected-toggle',
  standalone: true,
  imports: [ToggleComponent, IconComponent,CommonModule],
  templateUrl: './protected-toggle.component.html',
  styleUrl: './protected-toggle.component.css'
})
export class ProtectedToggleComponent {
  @Input() protectedToglleConfig: LabelToggleI = {
    title: '',
    isChecked: false,
    display: '',
    title2: '',
    isWithToggle: false
  }
  @Output() isCheckedtoogle = new EventEmitter<boolean>();
  onCheckedToggle(isCheckedToggle: boolean) {
    this.protectedToglleConfig.isChecked = isCheckedToggle;
    this.isCheckedtoogle.emit(this.protectedToglleConfig.isChecked);
  }
}
