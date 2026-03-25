import { Component, Input } from '@angular/core';
import { RequiredInfo } from '../../../interfaces';

@Component({
  selector: 'app-required-info',
  standalone: true,
  imports: [],
  templateUrl: './required-info.component.html',
  styleUrl: './required-info.component.css'
})
export class RequiredInfoComponent {
  @Input() requiredInfo: RequiredInfo = {
    message:"",
    isCustom: false,
  };
}
