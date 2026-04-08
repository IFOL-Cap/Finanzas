import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import flatpickr from "flatpickr";
import { Spanish } from "flatpickr/dist/l10n/es.js"
import { FormElement } from '../../../interfaces';


@Component({
  selector: 'app-date',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {
 @Input() dateConfig: FormElement = {
   type: '',
   pattern: '',
   isRequired: false,
   placeHolder: '',
   isDisabled: false,
   isHidden: false
 }

 datePickerId = '';
 datePicker: any = null;

  @ViewChild('calendarElement', { static: false }) calendarEle!: ElementRef;
  dateElementFrm = new FormGroup({
    datetEl: new FormControl(),
  });

  @Input() actualDate!: string;
  @Input() configPicker: any = {
    dateDefault: '',
    dateMin: '',
    dateMax: ''
  };
  @Output() selectedDate = new EventEmitter<string>();

  ngAfterViewInit() {
    this.datePickerId =`calendar-element-${this.dateConfig.idDate || new Date().getTime()}`;
    if (this.calendarEle) {
      this.calendarEle.nativeElement.setAttribute('id',this.datePickerId);
    }

    this.datePicker = flatpickr(`#${this.datePickerId}`, {
      locale: Spanish,
      dateFormat: "d/m/Y",
      defaultDate: this.configPicker.dateDefault,
      minDate: this.configPicker.dateMin,
      maxDate: this.configPicker.dateMax,
      onDestroy: () => console.log("onDestroy")
      
    });
    if(this.dateConfig.isRequired){
      this.dateElementFrm.get('datetEl')?.setValidators([Validators.required]);
      this.dateElementFrm.get('datetEl')?.updateValueAndValidity();
    }  
  }
  ngOnDestroy(){
    if (this.datePicker && typeof this.datePicker.destroy === 'function') {
      try {
        this.datePicker.destroy();
      } catch (error) {
        console.warn('Error al destruir el datePicker:', error);
      }
    }
  }

  changeDate(e: any){ this.selectedDate.emit(e.target.value); }

  setDateValue(dateTemp: Date){  this.datePicker.setDate(dateTemp);  }

}
