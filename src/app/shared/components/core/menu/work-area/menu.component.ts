import { Component, EventEmitter, Output } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
//import { AutomobilesComponent } from '../../submenu/automobiles/automobiles.component';
import { CommonModule } from '@angular/common';
import { AutomobilesComponent } from '../../submenu/automobiles/automobiles.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,OverlayModule, AutomobilesComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
   isOpen = false;
  isOpenSub = false;
  @Output() isClick = new EventEmitter<boolean>();

  closeMenu(value: any) {
    this.isOpenSub = value
    this.isClick.emit(value)
  }
}
