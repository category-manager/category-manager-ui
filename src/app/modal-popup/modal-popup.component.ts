import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { InternalDataService } from '../internal-data.service';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css'],
  providers: [InternalDataService]
})
export class ModalPopupComponent {
  
  @Input("showModal")
  showModal: boolean = false;
  @Input("viewNumber")
  viewNumber: number = 0; // CREATE: 0, DELETE: 1, UPDATE: 2

  @Output("showModalEvent")
  showModalEvent = new EventEmitter<boolean>();

  constructor(private internalData: InternalDataService){
  }

  ngOnInit() {
  }
  onClose() {
    this.showModal = false;
    this.showModalEvent.emit(this.showModal);
  }

}
