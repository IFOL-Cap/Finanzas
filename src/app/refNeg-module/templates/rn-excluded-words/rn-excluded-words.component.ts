import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/buttons/button/button.component";
import { LabelInputComponent } from "../../../shared/components/forms-elements/label-input/label-input.component";
import { LabelDateComponent } from "../../../shared/components/forms-elements/label-date/label-date.component";
import { LabelSelectComponent } from "../../../shared/components/forms-elements/label-select/label-select.component";
import { Router } from '@angular/router';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicTableComponent } from "../../../shared/components/dynamic-table/dynamic-table.component";
import { InputComponent } from "../../../shared/components/forms-elements/input/input.component";
import { LabelHelpComponent } from "../../../shared/components/messages-display/label-help/label-help.component";

@Component({
  selector: 'app-rn-excluded-words',
  standalone: true,
  imports: [ButtonComponent, LabelInputComponent, LabelDateComponent, LabelSelectComponent, CommonModule, FormsModule, DynamicTableComponent, InputComponent, LabelHelpComponent],
  templateUrl: './rn-excluded-words.component.html',
  styleUrl: './rn-excluded-words.component.css'
})
export class RnExcludedWordsComponent {
/**
     * Constructor de la clase que inyecta las dependencias necesarias.
     * @constructor
     * @param {Router} route - Servicio de enrutamiento de Angular para navegar entre vistas.
     */
  constructor(private route: Router) {}

  public columns = [
    { key: 'Borrar', label: 'Borrar' },
    { key: 'Actualizar', label: 'Actualizar' },
    { key: 'Palabra', label: 'Palabra' },
   
  ];
  
  public datasource = [
    {
      Borrar: '',
      Actualizar: '',
      Palabra: 'MEDINA',
    },
    
  ];
  /**
  actions = [
    {
      label: 'View/Print',
      icon: '/assets/icons/printer.svg',
      callback: (row: any) => this.pagarPoliza(row)
    }
  ]; */
  
  pagarPoliza(row: any) 
  {
    console.log("row: " + JSON.stringify(row));
    //this.route.navigate(["rn/step2"]);
  }

  //

  showForm: boolean = false;
  onAdd(){
    this.showForm = true;
  }
  onCancel(){
    this.showForm = false;
  }
  onAccept(){
    this.showForm = false;
  }

}
