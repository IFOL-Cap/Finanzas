import { Component, ViewChild } from '@angular/core';
import { DynamicTableComponent } from '../../../shared/components/core/dynamic-table/dynamic-table.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/buttons/button/button.component';
import { ModalMessageComponent } from '../../../shared/components/modales/modal-message/modal-message.component';
import { Message } from '../../../shared/interfaces';

@Component({
  selector: 'app-busqueda-result',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    DynamicTableComponent,
    ModalMessageComponent
  ],
  templateUrl: './busqueda-result.component.html',
  styleUrl: './busqueda-result.component.css'
})
export class BusquedaResultComponent
{
  @ViewChild(ModalMessageComponent) modalMessage!: ModalMessageComponent;

  public columns = [
    { key: 'clave', label: 'Clave' },
    { key: 'tipo', label: 'Tipo de garantía' },
    { key: 'estatus', label: 'Estatus' },
  ];

  public datasource = [
    {
      clave: '929',
      tipo: 'Carta credito',
      activa: 'Si',
    },
  ];


  public actions = [
    {
      label: 'Editar',
      icon: '/assets/iconsNewMapfre/icon - edit.svg',
      callback: (row: any) => this.editar(row)
    },
  ];

  public modalMessageBody!: Message;

  editar(row: any) {
    console.log('Editar', row);
  }

  agregarNuevo() {
    console.log('Agregar nuevo');
  }
}
