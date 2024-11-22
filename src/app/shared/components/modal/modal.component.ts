import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'shared-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnDestroy{

  constructor(public activateModal:NgbActiveModal){}

  
  @Input() public visible:boolean = false;

  @Output() public salir= new EventEmitter<boolean>();

  ngOnDestroy(): void {
    console.log("Saliendo del modal");
    this.salir.emit(false);
  }

  salirModal(){
    this.salir.emit(false);
  }

  

}
