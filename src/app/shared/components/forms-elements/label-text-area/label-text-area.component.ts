import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LabelHelpComponent } from '../../messages-display/label-help/label-help.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormElement, LabelHelp } from '../../../interfaces';

@Component({
  selector: 'app-label-text-area',
  standalone: true,
  imports: [
    LabelHelpComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './label-text-area.component.html',
  styleUrl: './label-text-area.component.css'
})
export class LabelTextAreaComponent
{
  @Input() control!: FormControl<string | null>;
  @Input() inputConfig: FormElement = {
    type: 'text',
    pattern: '',
    isRequired: false,
    placeHolder: '',
    isDisabled: false,
    isHidden: false,
    isRead: false,
    isInfo: false,
    labelInfo: '',
  };

  @Input() labelHelp: LabelHelp = {
    idTool: 'typeVechiculo',
    isRequired: false,
    isWithHelp: false,
    isWithSubtitle: false,
    title: '',
    subtitle: '',
    position: 'top',
    helpMsg: '',
  };

  constructor(private readonly fb: FormBuilder) {}

  public inputElementFrm!: FormGroup;

  ngOnInit()
  {
    this.inputElementFrm = this.fb.group({
      inputElement: [
        '',
        {
          validators: [],  // por ejemplo: [Validators.required]
          updateOn: 'blur',
        },
      ],
    });
  }

  ngAfterContentInit() {
    if (this.inputConfig.isRequired)
    {
      this.inputElementFrm.get('inputElement')?.setValidators([Validators.required]);
      this.inputElementFrm.get('inputElement')?.updateValueAndValidity();
    }
    if (this.inputConfig.pattern)
    {
      this.inputElementFrm
        .get('inputElement')
        ?.setValidators([
          Validators.pattern('/[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]);
      this.inputElementFrm.get('inputElement')?.updateValueAndValidity();
    }
  }
}
