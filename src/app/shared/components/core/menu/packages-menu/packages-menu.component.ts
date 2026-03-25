import { Component, Input, ViewChild } from '@angular/core';
import { OpcResponsiveComponent } from '../../../modales/opc-responsive/opc-responsive.component';
import { SaveQuoteComponent } from '../../../modales/save-quote/save-quote.component';
import { PrintComponent } from '../../../modales/print/print.component';
import { SendComponent } from '../../../modales/send/send.component';
import { CalculadoraComponent } from '../../../modales/calculadora/calculadora.component';


@Component({
  selector: 'app-packages-menu',
  standalone: true,
  imports: [SaveQuoteComponent, PrintComponent, SendComponent, OpcResponsiveComponent],
  templateUrl: './packages-menu.component.html',
  styleUrl: './packages-menu.component.css'
})
export class PackagesMenuComponent {
  @Input() isWithCalculator: boolean = false;
  @ViewChild(CalculadoraComponent) modalCalc!: CalculadoraComponent;
	@ViewChild(SaveQuoteComponent) modalSave!: SaveQuoteComponent;
	@ViewChild(PrintComponent) modalPrint!: PrintComponent;
	@ViewChild(SendComponent) modalSend!: SendComponent;
	@ViewChild(OpcResponsiveComponent) modalOpc!: OpcResponsiveComponent;

	showModal() 
	{
		this.modalCalc.openModalCalc();
	}
	show(event: string) {
		switch (event) {
			case 'save':
				this.showSave();
				break;
			case 'print':
				this.showPrint();
				break;
			case 'send':
				this.showSend();
				break;

			default:
				break;
		}
	}
	showSave() 
	{
		this.modalSave.openModalSave();
	}

	showPrint() 
	{
		this.modalPrint.openModalPrint();
	}

	showOpc() 
	{
		this.modalOpc.openModal();
	}

  	showSend() 
	{
    	this.modalSend.openModalSend();
  	}
}
