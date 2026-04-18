import { Routes } from "@angular/router";
import { ApRoutes } from "../shared/consts";
import { CatalogosTableLayoutComponent } from "./page/catalogos-table-layout/catalogos-table-layout.component";

export const catalogosRoutes : Routes = [
    {
        path: '',
        component: CatalogosTableLayoutComponent,
        children: [
        {
            path: '',
            redirectTo: ApRoutes.catalogos.path.step1.value,
            pathMatch: 'full'
        },
        {
            path: ApRoutes.catalogos.path.step1.value,
            loadComponent: () => import('./page/catalogos-table-step1/catalogos-table-step1.component').then(ct => ct.CatalogosTableStep1Component)
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

export default catalogosRoutes
