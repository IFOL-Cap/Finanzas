import { Component } from '@angular/core';
import { DynamicTableComponent } from '../../../../shared/components/core/dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-resuls',
  standalone: true,
  imports: [
    DynamicTableComponent
  ],
  templateUrl: './resuls.component.html',
  styleUrl: './resuls.component.css'
})
export class ResulsComponent 
{
  public columns = [
    { key: 'nombre', label: 'Nombre' },
    { key: 'referencia', label: 'Referencia' },
    { key: 'telefono', label: 'Telefono' },
    { key: 'domicilio', label: 'Domicilio' },
  ];

  public datasource = [
  ];

  
  actions = [
    {
      label: 'View/Print',
      icon: '/assets/icons/printer.svg',
      callback: (row: any) => this.pagarPoliza(row)
    }
  ];
  
  pagarPoliza(row: any) 
  {
    console.log("row: " + JSON.stringify(row));
    //this.route.navigate(["pending/step2"]);
  }
}
