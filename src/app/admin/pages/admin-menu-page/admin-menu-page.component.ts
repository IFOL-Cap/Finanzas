import { Component } from '@angular/core';
import { TreeNode } from '../../../shared/interfaces';
import { AdminMenuTreeComponent } from '../../components/admin-menu-tree/admin-menu-tree.component';

@Component({
  selector: 'app-admin-menu-page',
  standalone: true,
  imports: [AdminMenuTreeComponent],
  templateUrl: './admin-menu-page.component.html',
  styleUrl: './admin-menu-page.component.css',
})
export class AdminMenuPageComponent {
  treeData: TreeNode[] = [
    {
      id: 1,
      label: 'Aplicaciones',
      expanded: true,
      children: [
        {
          id: 2,
          label: 'Emision',
          children: [
            {
              id: 20,
              label: 'Cotizacion',
            },
            {
              id: 21,
              label: 'Emision',
            },
            {
              id: 22,
              label: 'Inicio',
            },
          ],
        },
        {
          id: 3,
          label: 'Garantias',
          children: [
            {
              id: 30,
              label: 'Alta',
            },
            {
              id: 31,
              label: 'Catalogos',
              children: [
                {
                  id: 310,
                  label: 'Consumo de Garantias',
                },
                {
                  id: 311,
                  label: 'Tipos de garantias',
                },
                {
                  id: 312,
                  label: 'Subtipos de garantias',
                },
                {
                  id: 313,
                  label: 'Tipos bien mueble',
                },
                {
                  id: 314,
                  label: 'Alta Terceros',
                },
              ],
            },
          ],
        },
        {
          id: 4,
          label: 'Administracion',
          children: [
            {
              id: 40,
              label: 'Menu',
            },
            {
              id: 41,
              label: 'Perfiles',
            },
          ],
        },
        {
          id: 5,
          label: 'Consultas',
          children: [
            {
              id: 50,
              label: 'Garantias por Poliza',
            },
            {
              id: 51,
              label: 'Personas',
            },
            {
              id: 52,
              label: 'Envio de Poliza',
            },
            {
              id: 53,
              label: 'Solicitudes',
            },
            {
              id: 54,
              label: 'Consulta de Poliza',
            },
            {
              id: 55,
              label: 'Consulta de XML',
            },
          ],
        },
        {
          id: 6,
          label: 'Ref. Neg.',
          children: [
            {
              id: 60,
              label: 'Palabras Excluir',
            },
            {
              id: 61,
              label: 'Causa',
            },
            {
              id: 62,
              label: 'Subcausa',
            },
            {
              id: 63,
              label: 'Personas',
            },
          ],
        },
      ],
    },
  ];
}
