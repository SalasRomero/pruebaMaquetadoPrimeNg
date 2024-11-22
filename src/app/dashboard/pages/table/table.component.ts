import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Table } from 'primeng/table';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  customers!: any[];

  representatives!: any[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  searchValue: string | undefined;

  constructor(private modalService:NgbModal) {}

  data: any = []; 
  products: any[] = []; 
  ngOnInit() { this.data = { labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], 
    datasets: [ { label: 'Sales', data: [65, 59, 80, 81, 56, 55, 40], fill: false, borderColor: '#4bc0c0' } ] }; 
    this.products = [ 
      { id: '1', name: 'Product 1', category: 'Category 1', price: 50 }, 
      { id: '2', name: 'Product 2', category: 'Category 2', price: 100 }, 
    { id: '3', name: 'Product 3', category: 'Category 3', price: 150 } ]; } 


    visible: boolean = false;

    showDialog() {
        this.visible = true;
        console.log('Entre aqui...');
    }
 

    salir(){
      this.visible = false;
      console.log("Sali del modal");
    }

    open() {
      this.modalService.open(ModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          console.log(`Closed with: ${result}`);
        },
        (reason) => {
         console.log('Sali');
        },
      );
    }

}
