import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { File } from '../models/File';

declare var require: any;
const FileSaver = "";//require('file-saver');

@Injectable({
  providedIn: 'root'
})
export class FileSaverService {

  constructor(private httpClient: HttpClient) { }

  public save(file: File){
    //FileSaver.saveAs(file.path + file.fileName);
  }

  /*public downloadPDF(fullPath: string){
    return this.httpClient.get(fullPath,{
      responseType: 'arraybuffer',
      headers: new HttpHeaders().append('Content-Type', 'application/pdf'),
    });
  }*/

  public downloadPDF(file: File){
    this.httpClient.get(file.path + file.fileName, {
      responseType: 'arraybuffer',
      headers: new HttpHeaders().append('Content-Type', 'application/pdf'),
    }).subscribe((data: ArrayBuffer) => {
      this.download(data, 'application/pdf', file.fileName);
    });
  }

  public downloadExcel(fullPath: string){
    return this.httpClient.get(fullPath,{
      responseType: 'arraybuffer',
      headers: new HttpHeaders().append('Content-Type', 'application/vnd.ms-excel'),
    });
  }

  download(binaryData: ArrayBuffer, fileType: string, fileName: string): void {
    const file: Blob = new Blob([binaryData], {type: fileType});
    const url: string = window.URL.createObjectURL(file);
    const anchorElement: HTMLAnchorElement = document.createElement('a');
    anchorElement.download = fileName;
    anchorElement.href = url;
    anchorElement.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
  }
}
