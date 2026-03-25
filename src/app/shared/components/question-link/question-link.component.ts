import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalesService } from '../../services/modales.service';
import { GenericType, QuestionLinkI } from '../../interfaces';


@Component({
  selector: 'app-question-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-link.component.html',
  styleUrl: './question-link.component.css'
})
export class QuestionLinkComponent {
  @Input() questionLConf: QuestionLinkI = {
    title: '',
    isUnderline: false,
    isCustom: false,
    configMdl: {
      isOpen: false,
      title: '',
      type: GenericType.money,
      isAceptBtn: false
    }
  }

  constructor(private readonly _modals: ModalesService){}
  openMdl() {
    if(this.questionLConf.isCustom){
      switch(this.questionLConf.configMdl.type){
        case GenericType.crystals:
        case GenericType.menage:
        case GenericType.electrodomesticSimple:
          this._modals.setOpenCrystalsMdl(this.questionLConf.configMdl);
          break;
        case GenericType.expressAgreement:
          this._modals.setOpenExpressAgreeMdl(this.questionLConf.configMdl);
          break;
      }
    } else{
      switch(this.questionLConf.configMdl.type){
        case GenericType.money:
        case GenericType.personalObject:
        case GenericType.electrodomestic:
        case GenericType.rcParking:
        case GenericType.extendedFit:
          this._modals.setOpenGenericHbsMdl(this.questionLConf.configMdl);
          break;
      }
    }
  }
}
