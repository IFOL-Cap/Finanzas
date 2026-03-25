import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { IconComponent } from "../../core/icon/icon.component";
import { CommonModule } from '@angular/common';
import { BtnMuI, DeviceView, FromButton, IconType } from '../../../interfaces';
import { DataService } from '../../../services/data.service';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-btn-menu',
  standalone: true,
  imports: [ButtonComponent, MatButtonModule, MatMenuModule, IconComponent, CommonModule],
  templateUrl: './btn-menu.component.html',
  styleUrl: './btn-menu.component.css',
})
export class BtnMenuComponent {
  @Input() btnMuConfig: BtnMuI = {
    labelBtn: '',
    from: FromButton.fromHeaderHome,
    isONlyIcon: false,
    icon: IconType.more,
  }
  inOnHoverCar: boolean = false;
  inOnHoverDemage: boolean = false;
  inOnHoverLife: boolean = false;
  currentView = DeviceView.laptop;
  placeholder = ''
  constructor(private readonly _data: DataService){}
  ngOnInit() {
    this.placeholder = this.btnMuConfig.labelBtn;
    this._data.getDeviceView().pipe( filter(deviceView => deviceView != this.currentView),
                                      tap(deviceView => this.currentView = deviceView))
                              . subscribe(deviceView => this.changingView(deviceView));
  }
  changingView(deviceView: DeviceView): void {
    if(this.btnMuConfig.labelMobile != undefined){
      this.placeholder = this._data.getPlaceholder(deviceView,this.btnMuConfig.labelBtn, this.btnMuConfig.labelMobile)
    } else {
      this.placeholder = this.btnMuConfig.labelBtn;
    }
  }

onOut(iconType:IconType) {
  this.getTypeOnHover(iconType, false);
}
onHover(iconType:IconType) {
  this.getTypeOnHover(iconType);
}

getTypeOnHover(iconTYpe: IconType ,isFromHover: boolean = true) {
    switch (iconTYpe) {
      case IconType.carH:
        this.inOnHoverCar = isFromHover;
        break;
      case IconType.demage:
        this.inOnHoverDemage = isFromHover;
        break;
      case IconType.life:
        this.inOnHoverLife = isFromHover;
        break;
      
    }
  }
}
