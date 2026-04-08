import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormElement, FormTextAreaElement } from '../../../interfaces';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css'
})
export class TextareaComponent 
{
  @Input() textAreaConfig:FormTextAreaElement = {
      type: 'text',
      pattern: '',
      isRequired: false,
      placeHolder: '',
      isDisabled: false,
      isHidden: false,
      isRead: false,
  }

  @Input() actualValue: string | number = '';
  @Output() textTyped = new EventEmitter<string>();
  
  textAreaElementFrm: FormGroup = new FormGroup({});
  
  constructor(private readonly fb: FormBuilder){}

  ngOnInit() 
  {
    this.textAreaElementFrm = this.fb.group({
      textAreaElement: ['', {
        validators: [],
        updateOn: 'blur'
      }]
    });
  
    // Llamar a la función de configuración si es necesario
    this.configureValidators();
  }
  
  ngAfterContentInit() 
  {
    this.configureValidators()
  }
  
  configureValidators() 
  {
    if(this.textAreaConfig.isRequired){
      this.textAreaElementFrm.get('textAreaElement')?.setValidators([Validators.required]);
      this.textAreaElementFrm.get('textAreaElement')?.updateValueAndValidity();
    }
    if(this.textAreaConfig.pattern){
      this.textAreaElementFrm.get('textAreaElement')?.setValidators([Validators.pattern("/[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
      this.textAreaElementFrm.get('textAreaElement')?.updateValueAndValidity();
    }
  }
  
   
  onKey(event: any) {
    this.textTyped.emit(event.target.value);
  }
}
