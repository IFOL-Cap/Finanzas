import { MatPaginatorIntl } from "@angular/material/paginator";

export function getPaginatorIntl(): MatPaginatorIntl {
  const paginatorIntl = new MatPaginatorIntl();
  paginatorIntl.itemsPerPageLabel = "Registros por página";
  paginatorIntl.nextPageLabel = '>';
  paginatorIntl.previousPageLabel = '<';
  paginatorIntl.firstPageLabel = '<<'
  paginatorIntl.lastPageLabel = '>>'
  paginatorIntl.getRangeLabel = rangeLabel;
  return paginatorIntl;
}

const rangeLabel = (page: number, pageSize: number, length: number) =>{
  if (length === 0 || pageSize === 0){
    return `0 de ${length}`;;
  }
  length = Math.max(length,0);
  const starIndex = page * pageSize;

  const endIndex = starIndex < length ? Math.min(starIndex + pageSize, length) : starIndex + pageSize;

  return `${starIndex + 1} - ${endIndex} de ${length}`;
}