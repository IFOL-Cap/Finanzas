import { Routes } from "@angular/router";
import { ApRoutes } from "../../../consts";
import { LayoutConsultingTemplateComponent } from "./layout-consulting-template/layout-consulting-template.component";
//import { ApRoutes } from "../shared/consts";
//import { UljLayoutComponent } from "./pages/ulj-layout/ulj-layout.component";
//import { UljAccordionDataInsuredComponent } from "./pages/ulj-accordion-data-insured/ulj-accordion-data-insured.component";

export const consulRoutes : Routes = [
    {
        path: '',
        redirectTo: ApRoutes.consul.value,
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutConsultingTemplateComponent,
        children: [
        {
            path: '',
            redirectTo: ApRoutes.consul.path.step1.value,
            pathMatch: 'full'
        },
        {
            path: ApRoutes.consul.path.step1.value,
            loadComponent: () => import('./accordion-consulting-template/accordion-consulting-template.component').then(consul => consul.AccordionConsultingTemplateComponent)
        }
        ]
    },

];

export default consulRoutes
