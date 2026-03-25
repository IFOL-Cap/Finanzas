import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfirmMdlI, CrystalesMdl, GenericMdlI } from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class ModalesService {
  isOpenConfirmMdl$ = new Subject<ConfirmMdlI>();
  openExpressAgreeMdl$ = new Subject<GenericMdlI>();
  openCrystalsMdl$ = new Subject<CrystalesMdl>();
  openGenericHbsMdl$ = new Subject<GenericMdlI>();
  constructor() { }
  setOpenConfirmMdl(openConfirmMdl: ConfirmMdlI) {
    this.isOpenConfirmMdl$.next(openConfirmMdl);
  }
  setOpenExpressAgreeMdl(openExpressMdl: GenericMdlI) {
    this.openExpressAgreeMdl$.next(openExpressMdl);
  }
  getOpenExpressAgreeMdl(){
    return this.openExpressAgreeMdl$.asObservable();
  }
  setOpenCrystalsMdl(openCrystalsMdl: GenericMdlI) {
    this.openCrystalsMdl$.next(openCrystalsMdl);
  }
  getOpenCrystalsMdl(){
    return this.openCrystalsMdl$.asObservable();
  }
  setOpenGenericHbsMdl(openGenericHbsMdl: GenericMdlI) {
    this.openGenericHbsMdl$.next(openGenericHbsMdl);
  }
  getOpenGenericHbsMdl(){
    return this.openGenericHbsMdl$.asObservable();
  }
}
