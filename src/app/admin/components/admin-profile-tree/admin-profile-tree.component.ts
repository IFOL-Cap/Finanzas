import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeNode } from '../../../shared/interfaces';
import { AccordionReusableComponent } from '../../../shared/components/accordion-reusable/accordion-reusable.component';
import { AccordionReusableItemComponent } from '../../../shared/components/accordion-reusable/accordion-reusable-item/accordion-reusable-item.component';
import {
  TreeViewProfileComponent,
  TreeViewProfileMenuActionPayload,
  TreeViewProfileMenuActions,
} from '../../../shared/components/tree-view-profile/tree-view-profile.component';

@Component({
  selector: 'app-admin-profile-tree',
  standalone: true,
  imports: [AccordionReusableComponent, AccordionReusableItemComponent, TreeViewProfileComponent],
  templateUrl: './admin-profile-tree.component.html',
  styleUrl: './admin-profile-tree.component.css',
})
export class AdminProfileTreeComponent {
  @Input() nodes: TreeNode[] = [];
  @Input() level = 0;
  @Input() title: string = 'Administracion de perfiles';
  @Input() menuActions?: TreeViewProfileMenuActions;

  @Output() menuAction = new EventEmitter<TreeViewProfileMenuActionPayload>();
}
