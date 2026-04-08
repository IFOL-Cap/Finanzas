import { Routes } from "@angular/router";
import { ApRoutes } from "../shared/consts";
import { GarantiaAltaLayoutComponent } from "./page/garantia-alta-layout/garantia-alta-layout.component";

export const garantiasRoutes : Routes = [
    {
        path: '',
        redirectTo: ApRoutes.garantias.value,
        pathMatch: 'full'
    },
    {
        path: '',
        component: GarantiaAltaLayoutComponent,
        children: [
        {
            path: '',
            redirectTo: ApRoutes.im.path.step1.value,
            pathMatch: 'full'
        },
        {
            path: ApRoutes.garantias.path.step1.value,
            loadComponent: () => import('./page/garantia-alta-step1/garantia-alta-step1.component').then(gt => gt.GarantiaAltaStep1Component)
        },
        /*{
            path: ApRoutes.im.path.step2.value,
            loadComponent: () => import('./page/im-accordion-issuance-emission/im-accordion-issuance-emission.component').then(im => im.ImAccordionIssuanceEmissionComponent)
        },
        
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

export default garantiasRoutes
