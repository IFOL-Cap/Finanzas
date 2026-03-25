import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormElement, DifferetType } from '../../../interfaces';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  selectElementFrm = new FormGroup({
    selectEl: new FormControl(''),
 });
 @Input() selectConfig:FormElement = {
    type: '',
    pattern: '',
    isrequied: false,
    placeHolder: '',
    isDisable: false,
    isHidden: false,
    id: DifferetType.none
  }
  @Input() actualValue:string | number ='';
  @Output() itemSelected = new EventEmitter<string>();

  constructor(){}

  ngAfterContentInit() {
    if(this.selectConfig.isrequied){
      this.selectElementFrm.get('selectEl')?.setValidators([Validators.required]);
      this.selectElementFrm.get('selectEl')?.updateValueAndValidity();
    }
  }

  changeSelect() {
    this.itemSelected.emit(this.selectElementFrm.get('selectEl')!.value!);
  }

}