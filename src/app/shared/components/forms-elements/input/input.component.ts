import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormElement } from '../../../interfaces';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
/*
  @Input() inputConfig:FormElement = {
    type: 'text',
    pattern: '',
    isrequied: false,
    placeHolder: '',
    isDisable: false,
    isHidden: false,
    isRead: false,
    maxLength: 0,
    textTransform: 'none'
  }

  @Input() actualValue: string | number | undefined = '';
  @Output() textTyped = new EventEmitter<string>();

  inputElementFrm: FormGroup = new FormGroup({});

  constructor(private readonly fb: FormBuilder){}

  ngOnInit() {
    // Inicializar el formulario dentro de ngOnInit o en el constructor
    this.inputElementFrm = this.fb.group({
      inputElement: ['', {
        validators: [],
        updateOn: 'blur'
      }]
    });

    this.configureValidators();
  }

  ngAfterContentInit() {
    this.configureValidators()
  }

  configureValidators() {
    if(this.inputConfig.isrequied)
    {
      this.inputElementFrm.get('inputElement')?.setValidators([Validators.required]);
      this.inputElementFrm.get('inputElement')?.updateValueAndValidity();
    }
    if(this.inputConfig.pattern)
    {
      this.inputElementFrm.get('inputElement')?.setValidators([Validators.pattern(this.inputConfig.pattern)]);
      this.inputElementFrm.get('inputElement')?.updateValueAndValidity();
    }
  }

 
  onKey(event: any) {
    this.textTyped.emit(event.target.value);
  }
  */
 

 private readonly fb = inject(FormBuilder);

  inputElementFrm = this.fb.group({
     inputElement:['', {
        validators:[

        ],
        updateOn: 'blur'
     },
    ],

  });
@Input() inputConfig:FormElement = {
  type: 'text',
  pattern: '',
  isrequied: false,
  placeHolder: '',
  isDisable: false,
  isHidden: false,
  isRead: false,
}
@Input() isLabelAbsolute : boolean = false;
constructor(){}

ngOnInit(){
  this.inputElementFrm = this.fb.group({
     inputElement:['', {
        validators:[
      
        ],
        updateOn: 'blur'
     },
    ],
   
  });
}

ngAfterContentInit() {
  if(this.inputConfig.isrequied){
    this.inputElementFrm.get('inputElement')?.setValidators([Validators.required]);
    this.inputElementFrm.get('inputElement')?.updateValueAndValidity();
  }
  if(this.inputConfig.pattern){
    this.inputElementFrm.get('inputElement')?.setValidators([Validators.pattern("/[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
    this.inputElementFrm.get('inputElement')?.updateValueAndValidity();
  }
  if(this.inputConfig.isDisable)this.inputElementFrm.controls.inputElement.disable();
  else this.inputElementFrm.controls.inputElement.enable();
}

ngOnChanges() {
  if(this.inputConfig.isDisable) this.inputElementFrm.controls.inputElement.disable();
    else this.inputElementFrm.controls.inputElement.enable();
}
}
