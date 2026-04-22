import { ContextMenuServiceService } from './../../services/context-menu-service.service';
import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { TreeNode } from '../../interfaces';
import { CommonModule } from '@angular/common';

type ContextMenuAction = 'add' | 'modify' | 'delete';

export interface TreeViewProfileMenuActionPayload {
  action: ContextMenuAction;
  node: TreeNode;
  level: number;
}

export interface TreeViewProfileMenuActions {
  onAdd?: (payload: TreeViewProfileMenuActionPayload) => void;
  onModify?: (payload: TreeViewProfileMenuActionPayload) => void;
  onDelete?: (payload: TreeViewProfileMenuActionPayload) => void;
}

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
  @Input() menuActions?: TreeViewProfileMenuActions;
  @Output() menuAction = new EventEmitter<TreeViewProfileMenuActionPayload>();

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

    this.contextMenu = {
      visible: true,
      x: event.clientX,
      y: event.clientY,
      node
    };

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
  private getCurrentPayload(action: ContextMenuAction): TreeViewProfileMenuActionPayload | null {
    if (!this.contextMenu.node) {
      return null;
    }

    return {
      action,
      node: this.contextMenu.node,
      level: this.level,
    };
  }

  executeContextAction(action: ContextMenuAction): void {
    const payload = this.getCurrentPayload(action);
    if (!payload) {
      return;
    }

    // Notifica siempre al padre para permitir sobrecarga externa.
    this.menuAction.emit(payload);

    if (action === 'add' && this.menuActions?.onAdd) {
      this.menuActions.onAdd(payload);
      this.closeMenu();
      return;
    }

    if (action === 'modify' && this.menuActions?.onModify) {
      this.menuActions.onModify(payload);
      this.closeMenu();
      return;
    }

    if (action === 'delete' && this.menuActions?.onDelete) {
      this.menuActions.onDelete(payload);
      this.closeMenu();
      return;
    }

    // Fallback por defecto si no se sobreescribe en el padre.
    if (action === 'add') {
      this.addRootChild();
      return;
    }

    if (action === 'modify') {
      this.edit();
      return;
    }

    this.remove();
  }

  addRootChild() {
    console.log('Nuevo módulo', this.contextMenu.node);
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
