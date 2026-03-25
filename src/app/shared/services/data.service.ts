import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DeviceView, IconType } from '../interfaces';
import { BreakPoint, Icons } from '../consts';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  vehiculeType$ = new Subject<number>()
  deviceView$ = new BehaviorSubject<DeviceView>(DeviceView.laptop);
  isNewUser$ = new Subject<boolean>();
  constructor() { 

  }
  setIsNewUser(isNewuser: boolean){
    this.isNewUser$.next(isNewuser);
  }
  getNewUser(){
    return this.isNewUser$.asObservable();
  }
  setVehiculeType(vehiculeType: number) {
    this.vehiculeType$.next(vehiculeType);
  }
  getVehiculeType(){
    return this.vehiculeType$.asObservable();
  }
  getTypeIcon(icon: IconType, isWhite: boolean = true){
    return  `${this.getIcon(icon)}${isWhite ? 'White.svg' : '.svg'} `;
  }
  getIcon(iconType: IconType): string {
    return Icons[iconType];
  }

  setDeviceView(deviceView: DeviceView): void {
    this.deviceView$.next(deviceView);
  }
  getDeviceView(){
    return this.deviceView$.asObservable();
  }

  getDeviceViewType(width: number){
    if(width < BreakPoint.mobile){
      return DeviceView.mobile
    } else{
      return DeviceView.laptop
    }
  }
  getPlaceholder(deviceView: DeviceView, placeholder: string, placeHOlderMob:string){
    return deviceView == DeviceView.laptop ? placeholder: placeHOlderMob;
  }
}
