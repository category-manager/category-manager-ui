import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {

  prop: any;
  showModal: boolean = false;
  viewNumber: number = 0; // CREATE: 0, DELETE: 1, UPDATE: 2
  searchQuery: string = '';
  
  constructor() {}

  ngOnChanges() {
    
  }

  toggleView(propArray: any) {
    console.log('toggle called');
    
    this.showModal = propArray[0];
    this.viewNumber = propArray[1];
  } 

  // BELOW FUNCTION CAPTURES EVENT FROM 'CM-HOME-PAGE' CHILD-COMPONENT.
  setModalData(prop: any) {
    console.log('modal data set in HomeLayout');
    this.prop = prop;
    this.toggleView(prop);
  }

  setSearchQuery(searchQuery: any) {
    this.searchQuery = searchQuery;
  }

  // BELOW FUNCTION CAPTURES EVENT FROM 'MODAL-POPUP' CHILD-COMPONENT.
  setModalView(showModal: boolean) {
    this.showModal = showModal;
  }
}
