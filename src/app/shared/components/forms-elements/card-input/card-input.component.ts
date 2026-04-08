import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder,  FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { FormElement } from '../../../interfaces';


type InputName = 'input1' | 'input2' | 'input3' | 'input4';

@Component({
  selector: 'app-card-input',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './card-input.component.html',
  styleUrl: './card-input.component.css'
})
export class CardInputComponent implements AfterContentInit{
  @Input() inputConfig:FormElement = {
    type: 'text',
    pattern: '',
    isRequired: false,
    placeHolder: '',
    isDisabled: false,
    isHidden: false,
    isRead: false,
  }

  @ViewChild('input1') input1Ref!: ElementRef;
  @ViewChild('input2') input2Ref!: ElementRef;
  @ViewChild('input3') input3Ref!: ElementRef;
  @ViewChild('input4') input4Ref!: ElementRef;

  inputElementFrm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {

    this.inputElementFrm = this.fb.group({
    input1: ['', [Validators.required, Validators.pattern('^[0-9]{1}$')]],
    input2: ['', [Validators.required, Validators.pattern('^[0-9]{1}$')]],
    input3: ['', [Validators.required, Validators.pattern('^[0-9]{1}$')]],
    input4: ['', [Validators.required, Validators.pattern('^[0-9]{1}$')]],

  });

  }

  ngOnInit(){
    
  }

  ngAfterContentInit() {
    if (this.inputConfig.isRequired) {
      Object.keys(this.inputElementFrm.controls).forEach((key) => {
        const control = this.inputElementFrm.get(key);
        control?.setValidators([Validators.required]);
        control?.updateValueAndValidity();
      });
    }
  }

  public getCardNumber(): string {
    const values = Object.values(this.inputElementFrm.value);
    return values.join('');
  }

  public validate($event: KeyboardEvent): boolean {
    const regex = /^[0-9]*$/;
    return regex.test($event.key);
  }

  public onInput(event: Event, currentInputName: string) {
    const currentInput = this.inputElementFrm.get(currentInputName);
    if (currentInput?.value.length === 4) {
      const nextInputRef = this.getNextInputRef(currentInputName as InputName);
      if (nextInputRef) {
        nextInputRef.nativeElement.focus(); 
      }
    }
  }

  private getNextInputRef(currentInputName: InputName): ElementRef | null {
    const inputRefs : Record<InputName, ElementRef | null> = {
      input1: this.input2Ref,
      input2: this.input3Ref,
      input3: this.input4Ref,
      input4: null,
    };
    return inputRefs[currentInputName] || null;
  }
}