import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';

import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    AvatarModule,
    InputTextModule,
    NgbDatepickerModule
  ],
  exports:[
    ModalComponent
  ]
})
export class SharedModule { }
