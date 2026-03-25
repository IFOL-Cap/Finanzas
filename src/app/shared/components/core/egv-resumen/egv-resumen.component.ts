import { Component, OnInit, signal } from '@angular/core';
import { Resumen } from '../../../services/resumen/resumen';
import { ResumenServiceService } from '../../../services/resumen/resumen-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egv-resumen',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './egv-resumen.component.html'
})
export class EgvResumenComponent implements OnInit
{
  // public resumen: Resumen | null = null;
  public resumen =  signal<Resumen | null>(null);

  constructor(private resumenService: ResumenServiceService){}

  ngOnInit(): void
  {
    this.resumenService.resumen$.subscribe((data) => {
      // console.log('valor next',data)
      if(data) this.resumen.set(data);
      //console.log("Recupera datos para resumen: " + JSON.stringify(this.resumen));
    });
  }
}
