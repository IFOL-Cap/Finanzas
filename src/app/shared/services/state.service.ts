import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  isResumen = false;
  constructor() {

   }


  
  changeState(value: any) {
    this.isResumen = value
  }
  public set setResumen(v : boolean) {
    this.isResumen = v;
  }
  
  public get getResumen() : boolean {
    return this.isResumen
  }
}
