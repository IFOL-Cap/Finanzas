import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { LabelHelp } from '../../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label-help',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label-help.component.html',
  styleUrl: './label-help.component.css'
})
export class LabelHelpComponent {
  @Input() labelHelp: LabelHelp = {
    idTool:'typeVechiculo',
    isRequired: false,
    isWithHelp: false,
    isWithSubtitle: false,
    title: '',
    subtitle: '',
    position: 'top',
    helpMsg: '',
  }
  @ViewChild('imgHelp', { static: false }) imgHelp!: ElementRef;
  ngAfterViewInit() {
    // Use optional chaining to access elementRef safely
    if (this.imgHelp) {
      this.imgHelp.nativeElement.setAttribute('data-tooltip-placement',this.labelHelp.position);
    }

 }
}
