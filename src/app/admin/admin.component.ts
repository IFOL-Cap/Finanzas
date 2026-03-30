import { Component } from '@angular/core';
import { TreeNode } from '../shared/interfaces';
import { AccordionReusableComponent } from "../shared/components/accordion-reusable/accordion-reusable.component";
import { AccordionReusableItemComponent } from "../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component";
import { TreeViewComponent } from "../shared/components/tree-view/tree-view.component";
import { TreeViewProfileComponent } from "../shared/components/tree-view-profile/tree-view-profile.component";
import { A11yModule } from "@angular/cdk/a11y";
import { LabelInputComponent } from "../shared/components/forms-elements/label-input/label-input.component";
import { TextareaComponent } from "../shared/components/forms-elements/textarea/textarea.component";
import { LabelHelpComponent } from "../shared/components/messages-display/label-help/label-help.component";
import { ButtonComponent } from "../shared/components/buttons/button/button.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AccordionReusableComponent, AccordionReusableItemComponent, TreeViewComponent, TreeViewProfileComponent, A11yModule, LabelInputComponent, TextareaComponent, LabelHelpComponent, ButtonComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
  treeData: TreeNode[] = [
    {
      id: 1,
      label: 'Aplicaciones',
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
  ];

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
}
