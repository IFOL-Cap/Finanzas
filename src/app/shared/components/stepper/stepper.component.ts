import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { StateService } from '../../services/state.service';
import { FlowFrom, StepperI } from '../../interfaces';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {

  rs = inject(StateService);

  @Input() stepperConf: StepperI = {
    flowFrom: FlowFrom.fz
  }

  isActive: boolean = false;

  isStepOne: boolean = false;
  isStepTwo: boolean = false;
  isStepThree: boolean = false;
  isStepFour: boolean = false;
  isCompleted: boolean = false;

  isFinishOne:boolean = false;
  isFinishTwo: boolean = false;
  isFinishThree: boolean = false;
  isFinishFour: boolean = false;
  isFinishCompleted: boolean = false;


  titlesIM = ['Datos complementarios', 'Emision'];
  titlesFZ = ['Datos complementarios', 'Emision'];
  titlesNR = ['Datos complementarios', 'Emision'];
  titlesGarantia = ['Altas'];
  titlesCatalogos = ['Catálogo'];
  //'Cotización','Datos complementarios', 'Emisión', 'Datos de pago'


  public path: string = '';
  public titlesCurrent: string[] = [];

  constructor(private router: Router)
  {
    this.path = router.url
    console.log("url actual: " + this.path);
    this.changeStatus(this.router.url.split('/')[2]);
  }

  ngOnInit(): void
  {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd)
      {
        this.path = event.urlAfterRedirects;
        console.log("url altual2: " + this.path);
        this.changeStatus(this.path.split('/')[2]);
      }
    })
  }

  ngAfterContentInit(): void {
    this.titlesCurrent = this.getTitlesCurrent(this.stepperConf.flowFrom);
  }

  changeStatus(urlActive: string)
  {
    switch (urlActive)
    {
      case 'step1':
        this.isStepOne = true;
        this.isStepTwo = false;
        this.isStepThree = false;
        this.isStepFour = false;
        this.isFinishOne = false;
        this.isFinishTwo = false;
        this.isFinishThree = false;
        this.isFinishFour = false;
        this.isCompleted = false;
        this.rs.changeState(false);
        break;
      case 'step2':
        this.isStepOne = false
        this.isStepTwo = true;
        this.isStepThree = false;
        this.isStepFour = false;
        this.isFinishOne = true;
        this.isFinishTwo = false;
        this.isFinishThree = false;
        this.isFinishFour = false;
        this.isCompleted = false;
        this.rs.changeState(true)
        break;

      case 'step3':
        this.isStepOne = false;
        this.isStepTwo = false;
        this.isStepThree = true;
        this.isStepFour = false;
        this.isFinishOne = true;
        this.isFinishTwo = true;
        this.isFinishThree = false;
        this.isFinishFour = false;
        this.isCompleted = false;
        this.rs.changeState(true)
        break;

      case 'step4':
        this.isStepOne = false;
        this.isStepTwo = false;
        this.isStepThree = false;
        this.isStepFour = true;
        this.isFinishOne = true;
        this.isFinishTwo = true;
        this.isFinishThree = true;
        this.isFinishFour = false;
        this.isCompleted = false;

        this.rs.changeState(true)
        break;

      case 'completed':
        this.isStepOne = false;
        this.isStepTwo = false;
        this.isStepThree = false;
        this.isStepFour = false;
        this.isFinishOne = true;
        this.isFinishTwo = true;
        this.isFinishThree = true;
        this.isFinishFour = true;
        this.isCompleted = true;

        this.path == '/fz/completed' ? this.rs.changeState(false) : this.rs.changeState(true);
        break;

      default:
        break;
    }
  }

  getTitlesCurrent(flowFrom: FlowFrom): string[]
  {
    console.log("stteper seleccionado", flowFrom);
    switch(flowFrom)
    {
      case FlowFrom.im:
        return this.titlesIM;
      case FlowFrom.fz:
        return this.titlesFZ;
      case FlowFrom.rn:
        return this.titlesNR;
      case FlowFrom.gestion:
        return this.titlesGarantia;
      case FlowFrom.catalogos:
        return this.titlesCatalogos;
    }
  }
}
