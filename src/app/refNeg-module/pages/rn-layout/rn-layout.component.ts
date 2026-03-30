import { Component } from '@angular/core';
import { InstanceOptions, TabItem, Tabs, TabsInterface, TabsOptions } from 'flowbite';
import { StateService } from '../../../shared/services/state.service';
import { CarouselI, FlowFrom, LocationSite } from '../../../shared/interfaces';
import { CarouselComponent } from "../../../shared/components/core/carousel/carousel.component";
import { ResumeComponent } from "../../../shared/components/core/resume/resume.component";
import { EgvResumenComponent } from "../../../shared/components/core/egv-resumen/egv-resumen.component";
import { StepperComponent } from "../../../shared/components/stepper/stepper.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rn-layout',
  standalone: true,
  imports: [CarouselComponent, ResumeComponent, EgvResumenComponent, StepperComponent, RouterOutlet],
  templateUrl: './rn-layout.component.html',
  styleUrl: './rn-layout.component.css'
})
export class RnLayoutComponent {

  public flowFrom = FlowFrom;
  //rs = inject(StateService)
  //carrousel!: CarouselI;

  /*
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
  */

  carrousel: CarouselI = {
    view: LocationSite.quoter,
    data: [
      {
        imgUrl: '/assets/imgs/banner3.png',
        redirectUrl: '',
      },
      {
        imgUrl: '/assets/imgs/banner1.png',
        redirectUrl: '',
      },
      {
        imgUrl: '/assets/imgs/banner2.png',
        redirectUrl: '',
      },
    ],
  };

  constructor(public rs: StateService) {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => {
      this.initialTabs();
    }, 1000);
  }

  initialTabs(): void {
    const tabsElement: HTMLElement = document.getElementById(
      'ulj-tab'
    ) as HTMLElement;

    // create an array of objects with the id, trigger element (eg. button), and the content element
    const tabElements: TabItem[] = [
      {
        id: 'quotationulj',
        triggerEl: document.querySelector('#quotationulj-tab')!,
        targetEl: document.querySelector('#quotationulj')!,
      },
      {
        id: 'myquotesulj',
        triggerEl: document.querySelector('#myquotesulj-tab')!,
        targetEl: document.querySelector('#myquotesulj')!,
      },
      {
        id: 'policiesulj',
        triggerEl: document.querySelector('#policiesulj-tab')!,
        targetEl: document.querySelector('#policiesulj')!,
      },
    ];

    // options with default values
    const options: TabsOptions = {
      defaultTabId: 'quotation',
      activeClasses:
        'text-black font-rbt-black hover:text-black dark:text-purple-500 border-red-mafe',
      inactiveClasses:
        'dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-50 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
      onShow: () => {},
    };

    // instance options with default values
    const instanceOptions: InstanceOptions = {
      id: 'ulj-tab',
      override: true,
    };

    /*
     * tabsElement: parent element of the tabs component (required)
     * tabElements: array of tab elements (required)
     * options (optional)
     * instanceOptions (optional)
     */
    const tabs: TabsInterface = new Tabs(
      tabsElement,
      tabElements,
      options,
      instanceOptions
    );
    tabs.show('quotationulj');
  }

}
