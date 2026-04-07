import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideBarItem } from '../sidebarv2.component';

@Component({
  selector: 'app-sidebar-menu-item',
  standalone: true,
  // La auto-referencia es válida en Angular: el compilador la resuelve de forma diferida
  imports: [CommonModule, RouterLink, RouterLinkActive, SidebarMenuItemComponent],
  templateUrl: './sidebar-menu-item.component.html',
})
export class SidebarMenuItemComponent {
  @Input() item!: SideBarItem;
  @Input() depth: number = 0;

  isOpen = false;

  get hasChildren(): boolean {
    return !!(this.item.opciones?.length);
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
