import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModalPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ModalPopupComponent
  ]
})
export class ModalModule { }
