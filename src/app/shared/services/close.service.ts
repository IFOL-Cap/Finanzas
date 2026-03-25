import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloseService {
  isClose = false;
  constructor() { }

  close() {
    this.isClose = !this.isClose
    return this.isClose
  }
}
