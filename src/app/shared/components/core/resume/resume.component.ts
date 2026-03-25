import { ChangeDetectorRef, Component, Input } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {LayoutModule, MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { EncabezadoComponent } from '../../messages-display/encabezado/encabezado.component';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [MatExpansionModule, LayoutModule, EncabezadoComponent],
  templateUrl: './resume.component.html'
})
export class ResumeComponent {
  @Input() coberturas: any = [];
  @Input() title = '';
  @Input() titleEncabezado = '';
  
  public mobileQuery;
  public isMobile = false;
  public step;
  public isCompleted = false;

  constructor( hangeDetector: ChangeDetectorRef, media: MediaMatcher, router: Router  ) 
  {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this.isMobile = this.mobileQuery.matches;
    this.step = router.url
  } 
  
  ngOnInit(): void 
  {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.step == "/auto/completed" || this.step == "/medical/completed") {
      this.isCompleted = true;
    }
  }

}
