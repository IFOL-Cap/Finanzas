import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { FormElement } from '../../../interfaces';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-buttons-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttons-group.component.html',
  styleUrl: './buttons-group.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonsGroupComponent),
      multi: true
    }
  ]
})
export class ButtonsGroupComponent implements ControlValueAccessor {
  @Input() optionDefault: number = 0;
  @Input() isWithIcon?: boolean = true;
  @Output() buttonSelected = new EventEmitter<number>();
  @Output() optionSelect = new EventEmitter<any>();
  @Input() buttonsConfig: FormElement = {
    type: '',
    pattern: '',
    isRequired: false,
    placeHolder: '',
    isDisabled: false,
    isHidden: false,
    optionSelected: 1
  }

 optionSelected = 1;
 
 optionSend(value: any) {
  this.buttonsConfig.optionSelected = value;  
  this.optionSelected = value;
  this.onChange(value); // notifica a ngModel
  this.optionSelect.emit(value === 1 ? true : false);
  this.buttonSelected.emit(value);

 }

 ngOnInit(): void {
  this.optionSelected = this.optionDefault > 0 ? this.optionDefault : 1;
}

buttonClicked(option : number){
this.optionSelected = option;
this.buttonSelected.emit(this.optionSelected);
}

  
onChange = (_: any) => {};
onTouched = () => {};

writeValue(value: number): void {
  this.optionSelected = value;
  this.buttonsConfig.optionSelected = value;
}

registerOnChange(fn: any): void {
  this.onChange = fn;
}

registerOnTouched(fn: any): void {
  this.onTouched = fn;
}

setDisabledState?(isDisabled: boolean): void {
  this.buttonsConfig.isDisabled = isDisabled;
}


/*
  @Output() optionSelect = new EventEmitter<any>();
  @Input() buttonsConfig: FormElement = {
    type: '',
    pattern: '',
    isRequired: false,
    placeHolder: '',
    isDisabled: false,
    isHidden: false,
    optionSelected: 1
  }

 optionSelected = 1;

 optionSend(value: number | undefined) {
  this.buttonsConfig.optionSelected = value;
  value == 1 ? this.optionSelect.emit(true) : this.optionSelect.emit(false)
 }
 */
}
