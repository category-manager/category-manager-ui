import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';


@NgModule({
  declarations: [
    ModalPopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalPopupComponent
  ]
})
export class ModalModule { }
