import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './pages/table/table.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from '../shared/shared.module';







@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PanelMenuModule,
    PanelModule,
    TableModule,
    IconFieldModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    DividerModule,
    TagModule,
    ProgressBarModule,
    DropdownModule,
    ListboxModule,
    SliderModule,
    MultiSelectModule,
    ButtonModule,
    DialogModule,
    AvatarModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
