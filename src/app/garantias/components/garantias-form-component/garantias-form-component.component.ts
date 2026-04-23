import { Component, ViewChild } from '@angular/core';
import { DynamicTableComponent } from '../../../shared/components/core/dynamic-table/dynamic-table.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/buttons/button/button.component';
import { ModalAddElementComponent } from '../../modals/modal-add-element/modal-add-element.component';
import { ModalEditElementComponent } from '../../modals/modal-edit-element/modal-edit-element.component';
import { ModalMessageComponent } from '../../../shared/components/modales/modal-message/modal-message.component';
import { Message } from '../../../shared/interfaces';

@Component({
  selector: 'app-garantias-form-component',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    DynamicTableComponent,
    ModalAddElementComponent,
    ModalEditElementComponent,
    ModalMessageComponent
  ],
  templateUrl: './garantias-form-component.component.html',
  styleUrl: './garantias-form-component.component.css'
})
export class GarantiasFormComponentComponent
{
  @ViewChild(ModalAddElementComponent) modalAddElement!: ModalAddElementComponent;
  @ViewChild(ModalEditElementComponent) modalEditElement!: ModalEditElementComponent;
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
    {
      label: 'Borrar',
      icon: '/assets/iconsNewMapfre/icon - delete.svg',
      callback: (row: any) => this.delete(row)
    }
  ];

  public modalMessageBody!: Message;

  openModalMessage()
  {
    this.modalMessageBody =
    {
      title: 'Mensaje',
      message: 'Confirmar la baja del elemento',
    };
    this.modalMessage.openModal();
  }

  agregarNuevo()
  {
    this.modalAddElement.openModal();
  }

  editar(row: any)
  {
    console.log("row: " + JSON.stringify(row));
    this.modalEditElement.openModal();
    //this.route.navigate(["pending/step2"]);
  }

  delete(row: any)
  {
    console.log("row: " + JSON.stringify(row));
    this.openModalMessage();
    //this.route.navigate(["pending/step2"]);
  }
}
