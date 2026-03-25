import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElement } from '../../../interfaces';

@Component({
  selector: 'app-dynamicbuttons-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamicbuttons-group.component.html',
  styleUrl: './dynamicbuttons-group.component.css'
})
export class DynamicbuttonsGroupComponent {
  @Input() buttonsConig: FormElement = {
     type: '',
     pattern: '',
     isrequied: false,
     placeHolder: '',
     isDisable: false,
     isHidden: false,
     data: []
  }

  @Input() optionDefault: number = 0;
  @Output() buttonSelected = new EventEmitter<number>();
  
  optionSelected: number = 1;

  ngOnInit(): void {
    this.optionSelected = this.optionDefault > 0 ? this.optionDefault : 1;
  }
  
  buttonClicked(option : number){
    this.optionSelected = option;
    this.buttonSelected.emit(this.optionSelected);
  }
}

