import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeviceView, FromButton, SearchI, SearchType } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { filter, tap } from 'rxjs';
import { BtnMenuComponent } from "../../buttons/btn-menu/btn-menu.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, BtnMenuComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() isSearch: any;
  @Input() searchConf: SearchI = {
    type: SearchType.navbar,
    from: FromButton.navbar,
    placeholder: 'Buscar algo',
    placeholderMob: 'Buscar algo'
  };
  @Output() close = new EventEmitter<boolean>();
  currentView: DeviceView = DeviceView.laptop;
  placeholder = '';
  constructor(private readonly _data: DataService){}
  ngOnInit() {
    this.placeholder = this.searchConf.placeholder;
    this._data.getDeviceView().pipe( filter(deviceView => deviceView != this.currentView),
                                      tap(deviceView => this.currentView = deviceView))
                              . subscribe(deviceView => this.changingView(deviceView));
  }
  changingView(deviceView: DeviceView): void {
    this.placeholder = this._data.getPlaceholder(deviceView,this.searchConf.placeholder, this.searchConf.placeholderMob)
  }
  closeInput() {
    this.close.emit(false)
  } 
}
