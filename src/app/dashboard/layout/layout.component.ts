import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/app.layout.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{


  constructor() { }

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                routerLink:'home'
            },
            {
                label: 'Table',
                icon: 'pi pi-star',
                routerLink:'table'
            }
        ];
    }
  
}
