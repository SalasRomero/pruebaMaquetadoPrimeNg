import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./pages/home/home.component";
import { TableComponent } from "./pages/table/table.component";

const routes: Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'home',
                component:HomeComponent
            },
            {
                path:'table',
                component:TableComponent
            },
            {
                path:'**',
                pathMatch:'full',
                redirectTo:'home'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }