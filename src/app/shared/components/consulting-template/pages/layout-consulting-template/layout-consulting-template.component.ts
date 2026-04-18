import { Component, inject } from '@angular/core';
import { InstanceOptions, TabItem, Tabs, TabsInterface, TabsOptions } from 'flowbite';
import { CarouselI, FlowFrom, LocationSite } from '../../../../interfaces';
import { StateService } from '../../../../services/state.service';
import { StepperComponent } from "../../../stepper/stepper.component";
import { EgvResumenComponent } from "../../../core/egv-resumen/egv-resumen.component";
import { ResumeComponent } from "../../../core/resume/resume.component";
import { CarouselComponent } from "../../../core/carousel/carousel.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-consulting-template',
  standalone: true,
  imports: [StepperComponent, EgvResumenComponent, ResumeComponent, CarouselComponent, RouterOutlet],
  templateUrl: './layout-consulting-template.component.html',
  styleUrl: './layout-consulting-template.component.css'
})
export class LayoutConsultingTemplateComponent {

  public flowFrom = FlowFrom;
  rs = inject(StateService)
  carrousel!: CarouselI;

  ngOnInit(): void {

   this.carrousel = {
      view: LocationSite.quoter,
      data: [
        {
          imgUrl: '/assets/imgs/banner3.png',
          redirectUrl: ''
        },
        {
          imgUrl: '/assets/imgs/banner1.png',
          redirectUrl: ''
        },
        {
          imgUrl: '/assets/imgs/banner2.png',
          redirectUrl: ''
        }
       ],
       isResponsiveImg: false
    }
  }

   ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initialTabs();
  }

  initialTabs(): void {
    const tabsElement: HTMLElement | null = document.getElementById('con-tab');

    // create an array of objects with the id, trigger element (eg. button), and the content element
    const tabElements: TabItem[] = [
        {
            id: 'quotationcon',
            triggerEl: document.querySelector('#quotationcon-tab')!,
            targetEl: document.querySelector('#quotationcon')!,
        },
        {
            id: 'myquotes',
            triggerEl: document.querySelector('#myquotes-tab')!,
            targetEl: document.querySelector('#myquotes')!,
        },
        {
            id: 'policies',
            triggerEl: document.querySelector('#policies-tab')!,
            targetEl: document.querySelector('#policies')!,
        },
    ];

    // options with default values
    const options: TabsOptions = {
        defaultTabId: 'quotation',
        activeClasses:
            'text-black font-rbt-black hover:text-black dark:text-purple-500 border-red-mafe',
        inactiveClasses:
            'dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-50 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
        onShow: () => {
        },
    };

    // instance options with default values
    const instanceOptions: InstanceOptions = {
      id: 'con-tab',
      override: true
    };

    /*
    * tabsElement: parent element of the tabs component (required)
    * tabElements: array of tab elements (required)
    * options (optional)
    * instanceOptions (optional)
    */
    const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);
    tabs.show('quotationcon');
  }
}
