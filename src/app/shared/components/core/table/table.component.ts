import { Component, Input, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { TableLabels } from '../../../consts';
import { QuotitationsLatest } from '../../../../fakeData';
import { CheckComponent } from "../../forms-elements/check/check.component";
import { ActionsComponent } from "../../buttons/actions/actions.component";
import { PaginatorComponent } from "../paginator/paginator.component";



@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CheckComponent, ActionsComponent, PaginatorComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() pageSizeOptions: number[] = [];
  @ViewChild('paginatorQuotations', { static: false }) paginatorComp: PaginatorComponent;
  displayedColumns: string[] = ['numPoliza','contratante', 'producto', 'contacto', 'fecha', 'actions']; 
  dataSource = new MatTableDataSource<any>(QuotitationsLatest);
  
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(){

  }
  ngAfterViewInit() {
    console.log('pag table',this.pageSizeOptions)
    this.dataSource.paginator = this.paginatorComp.paginator;
 

  }

  
}