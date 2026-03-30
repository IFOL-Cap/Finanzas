import { Component, Input } from '@angular/core';
import { TreeNode } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.css'
})
export class TreeViewComponent {

  @Input() nodes: TreeNode[] = [];
  @Input() showCheckboxes = false
  @Input() level = 0;
    
  toggle(node: TreeNode) {
    node.expanded = !node.expanded;
  }

  toggleCheck(node: TreeNode, event: Event) {
    event.stopPropagation();
    node.checked = !node.checked;

    // Propagar a hijos (opcional)
    node.children?.forEach(child => this.setChecked(child, node.checked!));
  }

  private setChecked(node: TreeNode, checked: boolean) {
    node.checked = checked;
    node.children?.forEach(child => this.setChecked(child, checked));
  }


}
