import { Component } from '@angular/core';
import { LabelHelpComponent } from "../../../shared/components/messages-display/label-help/label-help.component";
import { InputComponent } from "../../../shared/components/forms-elements/input/input.component";
import { DynamicTableComponent } from "../../../shared/components/dynamic-table/dynamic-table.component";
import { ButtonComponent } from "../../../shared/components/buttons/button/button.component";
import { LabelInputComponent } from "../../../shared/components/forms-elements/label-input/label-input.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rn-cause',
  standalone: true,
  imports: [LabelHelpComponent, InputComponent, DynamicTableComponent, ButtonComponent, LabelInputComponent, CommonModule, FormsModule],
  templateUrl: './rn-cause.component.html',
  styleUrl: './rn-cause.component.css'
})
export class RnCauseComponent {
/**
     * Constructor de la clase que inyecta las dependencias necesarias.
     * @constructor
     * @param {Router} route - Servicio de enrutamiento de Angular para navegar entre vistas.
     */
  constructor(private route: Router) {}

  public columns = [
    { key: 'Borrar', label: 'Borrar' },
    { key: 'Actualizar', label: 'Actualizar' },
    { key: 'Clave', label: 'Clave' },
    { key: 'Descripción', label: 'Descripción' },
   
  ];
  
  public datasource = [
    {
      Borrar: '',
      Actualizar: '',
      Clave: 'I',
      Descripción: 'Inc obligs norm del cto fza',
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
