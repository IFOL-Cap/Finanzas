import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/buttons/button/button.component";
import { LabelInputComponent } from "../../../shared/components/forms-elements/label-input/label-input.component";
import { DynamicTableComponent } from "../../../shared/components/dynamic-table/dynamic-table.component";
import { InputComponent } from "../../../shared/components/forms-elements/input/input.component";
import { LabelHelpComponent } from "../../../shared/components/messages-display/label-help/label-help.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LabelSelectComponent } from "../../../shared/components/forms-elements/label-select/label-select.component";

@Component({
  selector: 'app-rn-sub-cause',
  standalone: true,
  imports: [ButtonComponent, LabelInputComponent, DynamicTableComponent, InputComponent, LabelHelpComponent, CommonModule, FormsModule, LabelSelectComponent],
  templateUrl: './rn-sub-cause.component.html',
  styleUrl: './rn-sub-cause.component.css'
})
export class RnSubCauseComponent {
/**
     * Constructor de la clase que inyecta las dependencias necesarias.
     * @constructor
     * @param {Router} route - Servicio de enrutamiento de Angular para navegar entre vistas.
     */
  constructor(private route: Router) {}

  public columns = [
    { key: 'borrar', label: 'Borrar' },
    { key: 'actualizar', label: 'Actualizar' },
    { key: 'clave', label: 'Clave' },
    { key: 'causa', label: 'Causa de Ref. Neg.' },
    { key: 'subCausa', label: 'SubCausa de Ref. Neg.' },
    
  ];
  
  public datasource = [
    {
      borrar: 'borrar',
      actualizar: 'actualizar',
      clave: 'a',
      causa: '1',
      subCausa: 'Falta de pago de la prima inicial'
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
