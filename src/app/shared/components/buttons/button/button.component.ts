import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonI, ButtonType, IconType } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { Icons } from '../../../consts';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  /*
  @Input() buttonConfig: ButtonI = {
    type: ButtonType.basic,
    label: ''
  }
  
  icon = '';
  iconGray = ''
  iconWhite = '';

  ngOnInit(): void {
    
    this.iconGray = `${this.getTypeIcon(this.buttonConfig.icon!)}.svg`;
    this.iconWhite = `${this.getTypeIcon(this.buttonConfig.icon!)}White.svg`

    this.icon = this.iconGray
  }
  getTypeIcon(iconType: IconType): string {

    return Icons[iconType];
  }
  onHover() {
    this.icon = this.iconWhite
  }
  onOut() {
    this.icon = this.iconGray;
  }
    */
     @Input() buttonConfig: ButtonI = {
    type: ButtonType.basic,
    label: '',
    isDisable: false,
  }
  @Output() onClickB = new EventEmitter();

  icon = '';
  iconGray = ''
  iconWhite = '';
  isSelected = false;
  constructor(private readonly _data: DataService){}
  ngOnInit(): void {
    this.iconGray = this._data.getTypeIcon(this.buttonConfig.icon!, false);
    this.iconWhite = this._data.getTypeIcon(this.buttonConfig.icon!);

    this.icon = this.buttonConfig.type == ButtonType.basic ? this.iconWhite : this.iconGray;
  }
  onHover() {
    if(this.buttonConfig.type != ButtonType.basic){
      this.icon = this.iconWhite

    }
  }
  onOut() {
    if(this.buttonConfig.type != ButtonType.basic){
      this.icon = this.iconGray;

    }
  }
  onButtonClick() {
    this.onClickB.emit()
  }

  btnClass() : string {
    if(this.buttonConfig.type == 1 || this.buttonConfig.isDisable) {
      return 'bg-gray-btn-disable text-white !cursor-not-allowed !transition-none !transform-none'
    } else if(this.buttonConfig.type == 0) {
      return '!bg-red-mafe !text-white-buttons'
      } else if (this.buttonConfig.type == 2) {
        return 'bg-white text-[#20272B] border border-[#9EA3A6]  hover:bg-red-mafe hover:border-red-mafe hover:text-white'
      } else {
        return ''
      }
   }
}
