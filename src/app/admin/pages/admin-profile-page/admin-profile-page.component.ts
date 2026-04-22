import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TreeNode } from '../../../shared/interfaces';
import { AdminProfileTreeComponent } from "../../components/admin-profile-tree/admin-profile-tree.component";
import { AdminProfileFormComponent } from "../../components/admin-profile-form/admin-profile-form.component";
import {
  TreeViewProfileMenuActionPayload,
  TreeViewProfileMenuActions,
} from '../../../shared/components/tree-view-profile/tree-view-profile.component';

@Component({
  selector: 'app-admin-profile-page',
  standalone: true,
  imports: [AdminProfileTreeComponent, AdminProfileFormComponent],
  templateUrl: './admin-profile-page.component.html',
  styleUrl: './admin-profile-page.component.css'
})
export class AdminProfilePageComponent {
  showProfileForm = false;

  profileTreeMenuActions: TreeViewProfileMenuActions = {
    onAdd: (payload) => this.handleAdd(payload),
    onModify: (payload) => this.handleModify(payload),
    onDelete: (payload) => this.handleDelete(payload),
  };

  treeDataP: TreeNode[] = [
    {
      id: 0,
      label: 'Perfiles',
      expanded: true,
      children: [
        {
          id: 1,
          label: 'Administrador',
          expanded: true,
          children: [
        {
          id: 11,
          label: 'Emisión',
          children: [
            {
              id: 20,
              label: 'Cotización',
            },
            {
              id: 21,
              label: 'Emisión',
            },
            {
              id: 22,
              label: 'Inicio',
            },
          ]
        },
        {
          id: 3,
          label: 'Garantías',
          children: [
            {
              id: 30,
              label: 'Alta'
            },
            {
              id: 31,
              label: 'Catálogos',
              children: [
                {
                  id: 310,
                  label: 'Consumo de Garantías'
                },
                {
                  id: 311,
                  label: 'Tipos de garantías'
                },
                {
                  id: 312,
                  label: 'Subtipos de garantías'
                },
                {
                  id: 313,
                  label: 'Tipos bien mueble'
                },
                {
                  id: 314,
                  label: 'Alta Terceros'
                }
              ]
            }
          ]
        },
        {
          id: 4,
          label: 'Administración',
          children: [
            {
              id: 40,
              label: 'Menú',
            },
            {
              id: 41,
              label: 'Perfiles',
            },
          ]
        },
        {
          id: 5,
          label: 'Consultas',
          children: [
            {
              id: 50,
              label: 'Garantías por Poliza'
            },
            {
              id: 51,
              label: 'Personas'
            },
            {
              id: 52,
              label: 'Envio de Póliza'
            },
            {
              id: 53,
              label: 'Solicitudes'
            },
            {
              id: 54,
              label: 'Consulta de Póliza'
            },
            {
              id: 55,
              label: 'Consulta de XML'
            }
          ]
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
            }
          ]
        },
          ],
        },
        {
          id: 2,
          label: 'Agente',
          expanded: true,
          children: [
        {
          id: 2,
          label: 'Emisión',
          children: [
            {
              id: 20,
              label: 'Cotización',
            },
            {
              id: 21,
              label: 'Emisión',
            },
            {
              id: 22,
              label: 'Inicio',
            },
          ]
        },
        {
          id: 3,
          label: 'Garantías',
          children: [
            {
              id: 30,
              label: 'Alta'
            },
            {
              id: 31,
              label: 'Catálogos',
              children: [
                {
                  id: 310,
                  label: 'Consumo de Garantías'
                },
                {
                  id: 311,
                  label: 'Tipos de garantías'
                },
                {
                  id: 312,
                  label: 'Subtipos de garantías'
                },
                {
                  id: 313,
                  label: 'Tipos bien mueble'
                },
                {
                  id: 314,
                  label: 'Alta Terceros'
                }
              ]
            }
          ]
        },
        {
          id: 4,
          label: 'Administración',
          children: [
            {
              id: 40,
              label: 'Menú',
            },
            {
              id: 41,
              label: 'Perfiles',
            },
          ]
        },
        {
          id: 5,
          label: 'Consultas',
          children: [
            {
              id: 50,
              label: 'Garantías por Poliza'
            },
            {
              id: 51,
              label: 'Personas'
            },
            {
              id: 52,
              label: 'Envio de Póliza'
            },
            {
              id: 53,
              label: 'Solicitudes'
            },
            {
              id: 54,
              label: 'Consulta de Póliza'
            },
            {
              id: 55,
              label: 'Consulta de XML'
            }
          ]
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
            }
          ]
        },
          ],
        },
        {
          id: 3,
          label: 'TT',
          expanded: true,
          children: [
        {
          id: 2,
          label: 'Emisión',
          children: [
            {
              id: 20,
              label: 'Cotización',
            },
            {
              id: 21,
              label: 'Emisión',
            },
            {
              id: 22,
              label: 'Inicio',
            },
          ]
        },
        {
          id: 3,
          label: 'Garantías',
          children: [
            {
              id: 30,
              label: 'Alta'
            },
            {
              id: 31,
              label: 'Catálogos',
              children: [
                {
                  id: 310,
                  label: 'Consumo de Garantías'
                },
                {
                  id: 311,
                  label: 'Tipos de garantías'
                },
                {
                  id: 312,
                  label: 'Subtipos de garantías'
                },
                {
                  id: 313,
                  label: 'Tipos bien mueble'
                },
                {
                  id: 314,
                  label: 'Alta Terceros'
                }
              ]
            }
          ]
        },
        {
          id: 4,
          label: 'Administración',
          children: [
            {
              id: 40,
              label: 'Menú',
            },
            {
              id: 41,
              label: 'Perfiles',
            },
          ]
        },
        {
          id: 5,
          label: 'Consultas',
          children: [
            {
              id: 50,
              label: 'Garantías por Poliza'
            },
            {
              id: 51,
              label: 'Personas'
            },
            {
              id: 52,
              label: 'Envio de Póliza'
            },
            {
              id: 53,
              label: 'Solicitudes'
            },
            {
              id: 54,
              label: 'Consulta de Póliza'
            },
            {
              id: 55,
              label: 'Consulta de XML'
            }
          ]
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
            }
          ]
        },
          ],
        }
      ],

    },
  ];

  onProfileTreeMenuAction(payload: TreeViewProfileMenuActionPayload): void {
    console.log('AdminProfilePage - menuAction:', payload);
  }

  private handleAdd(payload: TreeViewProfileMenuActionPayload): void {
    console.log('AdminProfilePage - add:', payload);
    this.showProfileForm = true;
  }

  private handleModify(payload: TreeViewProfileMenuActionPayload): void {
    console.log('AdminProfilePage - modify:', payload);
  }

  private handleDelete(payload: TreeViewProfileMenuActionPayload): void {
    console.log('AdminProfilePage - delete:', payload);
  }

  onAdminProfileFormSubmit(form: FormGroup): void {
    console.log('AdminProfilePage - form submit override:', form.value);
    this.showProfileForm = false;
  }

  onAdminProfileFormReset(): void {
    console.log('AdminProfilePage - form reset override');
    this.showProfileForm = false;
  }
}
