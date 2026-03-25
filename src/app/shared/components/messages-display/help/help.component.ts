import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { HelpI } from '../../../interfaces';
import { uid } from 'uid';


@Component({
  selector: 'app-help',
  standalone: true,
  imports: [],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {
  @Input() helpConf: HelpI = {
    id:'',
    msg: '',
    position:'bottom'
    
  }
  idHelp = uid();
  @ViewChild('imgHelpQuestion', { static: false }) imgHelp!: ElementRef;
  constructor(){
  }
  ngAfterViewInit() {
    if (this.imgHelp) {
      this.imgHelp.nativeElement.setAttribute('data-tooltip-placement',this.helpConf.position);
      
    }

 }
}
