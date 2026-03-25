import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Resumen } from './resumen';
import { EncryptedStorageService } from '../encrypted-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ResumenServiceService
{
  encryptedStorageService = inject(EncryptedStorageService);
  private resumenSource = new BehaviorSubject<Resumen | null>(null);
  public resumen$ = this.resumenSource.asObservable();

  constructor() { }

  public async  setResumen(resumen: Resumen, aplicationName:string)
  {
    await this.setResumeLocaleStorage(resumen,aplicationName);
     this.resumenSource.next(resumen);
  }

  private async setResumeLocaleStorage(resume: Resumen,aplicationName: string): Promise<void> {
    await this.encryptedStorageService.setItem(aplicationName,resume);
  }


  public async getResumeLocalStorage(aplicationName: string): Promise<void> {
   const resumen =  await this.encryptedStorageService.getItem(aplicationName) as Resumen;
   this.resumenSource.next(resumen);
  }

  public removeAplicationData(applicationName:string): void {
    this.encryptedStorageService.removeItem(applicationName)
  }

}
