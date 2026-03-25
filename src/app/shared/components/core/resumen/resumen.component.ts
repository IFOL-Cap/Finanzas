import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Resumen } from '../../../services/resumen/resumen';
import { ResumenServiceService } from '../../../services/resumen/resumen-service.service';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent {
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
