import { Component, Input } from '@angular/core';
import { TreeNode } from '../../../shared/interfaces';
import { AccordionReusableComponent } from '../../../shared/components/accordion-reusable/accordion-reusable.component';
import { AccordionReusableItemComponent } from '../../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component';
import { TreeViewComponent } from '../../../shared/components/tree-view/tree-view.component';

@Component({
  selector: 'app-admin-menu-tree',
  standalone: true,
  imports: [AccordionReusableComponent, AccordionReusableItemComponent, TreeViewComponent],
  templateUrl: './admin-menu-tree.component.html',
  styleUrl: './admin-menu-tree.component.css',
})
export class AdminMenuTreeComponent {
  @Input() nodes: TreeNode[] = [];
  @Input() title: string = 'Administracion del menu';
}
