import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TableLabels } from '../../../consts';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  @Input() pageSizeOptions: number[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.paginator._intl.firstPageLabel = TableLabels.firstPageLabel;
    this.paginator._intl.itemsPerPageLabel = TableLabels.itemsPerPageLabel;
    this.paginator._intl.lastPageLabel = TableLabels.lastPageLabel;
    this.paginator._intl.nextPageLabel = TableLabels.nextPageLabel;
    this.paginator._intl.previousPageLabel = TableLabels.previousPageLabel;
    this.paginator._intl.getRangeLabel =(page: number, pageSize: number, length: number) => {
        const start = page * pageSize + 1;
        const end = (page + 1) * pageSize;
        return `${start} - ${end} de ${length}`;
      };
  }
}
