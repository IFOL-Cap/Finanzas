import { Component } from '@angular/core';
import { Modal } from 'flowbite';
import { InputComponent } from '../../forms-elements/input/input.component';
import { ButtonComponent } from '../../buttons/button/button.component';


@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './calculadora.component.html'
})
export class CalculadoraComponent {

  modalcalc: any;
  compModal: any;

  ngAfterViewInit() {
    
    this.compModal = document.getElementById('modalCalc');
    this.modalcalc = new Modal(this.compModal);
  }
  
  openModalCalc() {
    this.modalcalc.show()
  }

}
