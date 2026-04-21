import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideBarItem } from '../sidebarv2.component';

@Component({
  selector: 'app-sm-menu-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, RouterLinkActive, SmMenuItemComponent],
  templateUrl: './sm-menu-item.component.html',
  styleUrl: './sm-menu-item.component.css',
})
export class SmMenuItemComponent implements OnChanges {
  @Input() item!: SideBarItem;
  @Input() depth: number = 0;
  @Input() isOpen: boolean = false;
  @Input() resetSignal: number = 0;
  @Output() toggleExpander = new EventEmitter<void>();
  @Output() itemClicked = new EventEmitter<void>();

  // Rastrear expanders abiertos en hijos recursivos
  openExpanderIds = signal<Set<string>>(new Set());

  get hasChildren(): boolean {
    return !!(this.item.opciones?.length);
  }

  onToggle(): void {
    this.toggleExpander.emit();
  }

  onItemClick(): void {
    this.itemClicked.emit();
  }

  toggleChildExpander(childId: string): void {
    const current = new Set(this.openExpanderIds());
    if (current.has(childId)) {
      current.delete(childId);
    } else {
      current.add(childId);
    }
    this.openExpanderIds.set(current);
  }

  isChildExpanderOpen(childId: string): boolean {
    return this.openExpanderIds().has(childId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetSignal']) {
      this.openExpanderIds.set(new Set());
    }
  }
}
