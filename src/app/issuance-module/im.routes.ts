import { Routes } from "@angular/router";
import { ImLayoutComponent } from "./page/im-layout/im-layout.component";
import { ApRoutes } from "../shared/consts";

export const imRoutes : Routes = [
    {
        path: '',
        redirectTo: ApRoutes.im.value,
        pathMatch: 'full'
    },
    {
        path: '',
        component: ImLayoutComponent,
        children: [
      /*  {
            path: '',
            redirectTo: ApRoutes.im.path.step1.value,
            pathMatch: 'full'
        },*/
        {
            path: ApRoutes.im.path.step1.value,
            loadComponent: () => import('./page/im-accordion-quotation-issuance-data/im-accordion-quotation-issuance-data.component').then(im => im.ImAccordionQuotationIssuanceDataComponent)
        },
        {
            path: ApRoutes.im.path.step2.value,
            loadComponent: () => import('./page/im-accordion-issuance-emission/im-accordion-issuance-emission.component').then(im => im.ImAccordionIssuanceEmissionComponent)
        },
        /*
        {
            path: ApRoutes.ulj.path.step3.value,
            loadComponent: () => import('./pages/ulj-accordion-supplementary/ulj-accordion-supplementary.component').then(ulj => ulj.UljAccordionSupplementaryComponent)
        },
        {
          path: ApRoutes.ulj.path.step4.value,
          loadComponent: () => import('./pages/ulj-accordion-emit/ulj-accordion-emit.component').then(ulj => ulj.UljAccordionEmitComponent)
        },
        {
          path: `${ApRoutes.ulj.path.completed.value}/:type`,
        loadComponent: () => import('./pages/ulj-accordion-payment-details/ulj-accordion-payment-details.component').then(ppr => ppr.UljAccordionPaymentDetailsComponent)
    },*/
        ]
    },
];

export default imRoutes
