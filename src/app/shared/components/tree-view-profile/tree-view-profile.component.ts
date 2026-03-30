import { ContextMenuServiceService } from './../../services/context-menu-service.service';
import { Component, Input, HostListener } from '@angular/core';
import { TreeNode } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-view-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-view-profile.component.html',
  styleUrl: './tree-view-profile.component.css'
})
export class TreeViewProfileComponent {


  @Input() nodes: any[] = [];
  @Input() level = 0;

  // ===== MENU CONTEXTUAL =====
  contextMenu = {
    visible: false,
    x: 0,
    y: 0,
    node: null as TreeNode | null
  };

  constructor(public ContextMenuServiceService: ContextMenuServiceService){}
  

  // ===== TOGGLE =====
  toggle(node: TreeNode) {
    if (node.children?.length) {
      node.expanded = !node.expanded;
    }
  }

  // ===== CHECKBOX =====
  shouldShowCheckbox(): boolean {
    return this.level > 0; // nunca en raíz
  }

  onCheckboxClick(event: MouseEvent, node: TreeNode) {
    event.stopPropagation();
    node.checked = !node.checked;
  }

  // ===== ICONOS (N niveles) =====
  getIconType(node: TreeNode): 'root' | 'folder' | 'leaf' {
    if (this.level === 0) return 'root';
    if (node.children?.length) return 'folder';
    return 'leaf';
  }

  // ===== MENU CONTEXTUAL =====
  onRightClick(event: MouseEvent, node: any) {
    console.log("node:", node);
    event.preventDefault();
    event.stopPropagation();

    /*this.contextMenu = {
      visible: true,
      x: event.clientX,
      y: event.clientY,
      node
    };*/

    this.ContextMenuServiceService.open(event, {
      ...node,
      level: this.level
    });

  }


  @HostListener('document:click')
  closeMenu() {
    //this.contextMenu.visible = false;
    this.ContextMenuServiceService.close();
  }

  // ===== ACCIONES =====
  addRootChild() {
    console.log('Nuevo módulo');
    this.closeMenu();
  }

  addChild() {
    console.log('Nuevo hijo', this.contextMenu.node);
    this.closeMenu();
  }

  rename() {
    console.log('Renombrar', this.contextMenu.node);
    this.closeMenu();
  }

  edit() {
    console.log('Editar', this.contextMenu.node);
    this.closeMenu();
  }

  remove() {
    console.log('Eliminar', this.contextMenu.node);
    this.closeMenu();
  }


}
