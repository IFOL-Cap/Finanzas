import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuServiceService {

  
private menuState = new BehaviorSubject<any>({
    visible: false,
    x: 0,
    y: 0,
    node: null
  });

  menu$ = this.menuState.asObservable();

  open(event: MouseEvent, node: any) {
    this.menuState.next({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      node
    });
  }

  close() {
    this.menuState.next({
      visible: false,
      x: 0,
      y: 0,
      node: null
    });
  }
}
