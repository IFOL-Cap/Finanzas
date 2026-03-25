import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-automobiles',
  standalone: true,
  imports: [],
  templateUrl: './automobiles.component.html'
})
export class AutomobilesComponent {
  @Output() isClick = new EventEmitter<boolean>();

  constructor(private router: Router){

  }
  navigation() {
    this.isClick.emit(false)
  }
}
