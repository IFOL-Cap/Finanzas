import { Routes } from "@angular/router";
import { RnLayoutComponent } from "./pages/rn-layout/rn-layout.component";
import { ApRoutes } from "../shared/consts";

export const rnRoutes : Routes = [
    {
        path: '',
        redirectTo: ApRoutes.rn.value,
        pathMatch: 'full'
    },
    {
        path: '',
        component: RnLayoutComponent,
        children: [
        {
            path: '',
            redirectTo: ApRoutes.rn.path.step1.value,
            pathMatch: 'full'
        },
        {
            path: ApRoutes.rn.path.step1.value,
            loadComponent: () => import('./pages/rn-accordion-excluded-words-data/rn-accordion-excluded-words-data.component').then(rn => rn.RnAccordionExcludedWordsDataComponent)
        },
        {
            path: ApRoutes.rn.path.step2.value,
            loadComponent: () => import('./pages/rn-accordion-cause-data/rn-accordion-cause-data.component').then(rn => rn.RnAccordionCauseDataComponent)
        },
        
        {
            path: ApRoutes.rn.path.step3.value,
            loadComponent: () => import('./pages/rn-accordion-sub-cause-data/rn-accordion-sub-cause-data.component').then(rn => rn.RnAccordionSubCauseDataComponent)
        },
        /*
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

export default rnRoutes
