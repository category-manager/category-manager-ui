import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalDataService {

  showModal: boolean = false;
  isCreate: boolean = true;
  isUpdate: boolean = true;
  isDelete: boolean = true;

  modalRef: any;
  constructor() { }

  toggleModalContents(viewNumber:  number) {
      this.isCreate = (0 == viewNumber);
      this.isUpdate = (1 === viewNumber);
      this.isDelete = (2 === viewNumber);
  }

  showModalView(showModal: boolean){
    this.showModal = showModal;
  }

}
