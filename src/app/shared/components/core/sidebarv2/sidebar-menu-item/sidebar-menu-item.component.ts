import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideBarItem } from '../sidebarv2.component';

@Component({
  selector: 'app-sidebar-menu-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SidebarMenuItemComponent],
  templateUrl: './sidebar-menu-item.component.html',
  styleUrl: './sidebar-menu-item.component.css',
})
export class SidebarMenuItemComponent {
  @Input() item!: SideBarItem;
  @Input() depth: number = 0;
  @Output() menuItemClicked = new EventEmitter<void>();
  @Output() closeAllMenus = new EventEmitter<void>();
  isOpen: boolean = false;

  constructor(private elementRef: ElementRef) {}

  get hasChildren(): boolean {
    return !!(this.item.opciones?.length);
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  closeMenu(): void {
    this.isOpen = false;
  }

  resetMenu(): void {
    this.isOpen = false;
  }

  onItemClick(): void {
    this.closeAllMenus.emit();
    this.menuItemClicked.emit();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.isOpen) {
      this.isOpen = false;
      this.closeAllMenus.emit();
    }
  }
}
