import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dynamic-table.component.html'
})
export class DynamicTableComponent 
{
  @Input() columns: { key: string; label: string }[] = [];
  @Input() datasource: any[] = [];
  @Input() actions: { label: string; icon?: string; callback: (row: any) => void }[] = [];
  @Input() showSelection: boolean = false; /** Mostrar/ocultar columna de selección en TODAS las filas */

  @Output() selectionChange = new EventEmitter<any[]>(); // Emite las filas seleccionadas

  sortDirection: 'asc' | 'desc' = 'asc';
  sortedColumn = '';
  currentPage = 1;
  itemsPerPage = 5;

  /** Set de selección por referencia de objeto */
  readonly selectedSet = new Set<any>();

  
  /** Selecciona todas las filas cada que cambia el datasource */
  ngOnChanges(changes: SimpleChanges): void 
  {
    if ('datasource' in changes || 'showSelection' in changes) 
    {
      this.rebuildSelectionBasedOnFlag();
      // Ajuste defensivo por si la página actual queda fuera de rango
      if (this.currentPage > this.totalPages) {
        this.currentPage = Math.max(1, this.totalPages);
      }
    }
  }
  
  /** Si showSelection=true → seleccionar todas las filas; si false → limpiar */
  private rebuildSelectionBasedOnFlag(): void 
  {
    this.selectedSet.clear();
    if (this.showSelection) 
    {
      for (const row of this.datasource ?? []) 
      {
        this.selectedSet.add(row);
      }
    }
    this.emitSelection();
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.datasource.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.datasource.length / this.itemsPerPage);
  }

  get showingRange() {
    const start = Math.min((this.currentPage - 1) * this.itemsPerPage + 1, this.datasource.length);
    const end = Math.min(this.currentPage * this.itemsPerPage, this.datasource.length);
    return { start: this.datasource.length === 0 ? 0 : start, end };
  }

  onItemsPerPageChange(value: number | string) {
    const parsed = typeof value === 'string' ? parseInt(value, 10) : value;
    this.itemsPerPage = isNaN(parsed) ? 5 : parsed;
    this.currentPage = 1;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  sortData(column: string) {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    this.datasource.sort((a, b) => {
      const valueA = a[column] ?? '';
      const valueB = b[column] ?? '';
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
      } else {
        return this.sortDirection === 'asc'
          ? valueA.toString().localeCompare(valueB.toString(), 'es', { sensitivity: 'base' })
          : valueB.toString().localeCompare(valueA.toString(), 'es', { sensitivity: 'base' });
      }
    });

    this.currentPage = 1;
  }

  
  // ---- Selección ----
  isSelected(row: any): boolean 
  {
    return this.selectedSet.has(row);
  }
  
  toggleRow(row: any, checked: boolean): void 
  {
    if (!this.showSelection) return; // sin selección si está oculto

    if (checked) 
    {
      this.selectedSet.add(row);
    } 
    else 
    {
      this.selectedSet.delete(row);
    }
    this.emitSelection();
  }

  
  toggleAllOnPage(checked: boolean): void 
  {
    for (const row of this.paginatedData ?? []) 
    {
      if (checked) 
      {
        this.selectedSet.add(row);
      } 
      else 
      {
        this.selectedSet.delete(row);
      }
    }
    this.emitSelection();
  }
  
  private emitSelection(): void 
  {
    this.selectionChange.emit(this.getSelectedRows());
  }

  /** Devuelve las filas seleccionadas del dataset completo */
  getSelectedRows(): any[] 
  {
    if (!this.showSelection) return [];
    return (this.datasource ?? []).filter(r => this.selectedSet.has(r));
  }

  /** Maestro: ¿todas las filas de la página están seleccionadas? */
  isAllSelectedOnPage(): boolean 
  {
    if (!this.showSelection) return false;

    const page = this.paginatedData ?? [];
    if (!page.length)
    {
      return false;
    }
    return page.every(r => this.selectedSet.has(r));
  }

  /** Maestro: ¿selección parcial en la página? */
  isIndeterminateOnPage(): boolean 
  {
    if (!this.showSelection) return false;

    const page = this.paginatedData ?? [];
    if (!page.length)
    {
      return false;
    }

    const selectedCount = page.filter(r => this.selectedSet.has(r)).length;

    return selectedCount > 0 && selectedCount < page.length;
  }

  /** Colspan: selección (si visible) + columnas + acciones (si hay) */
  get totalColumns(): number 
  {
    const selectionCols = this.showSelection ? 1 : 0;
    const actionCols = this.actions?.length > 0 ? 1 : 0;
    return this.columns.length + selectionCols + actionCols;
  }

}