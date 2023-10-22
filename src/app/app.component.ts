import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'category-manager-ui';

  showModal: boolean = false;
  viewNumber: number = 0; // CREATE: 0, DELETE: 1, UPDATE: 2

  toggleView(propArray: any) {
    console.log('toggle called');
    
    this.showModal = propArray[0];
    this.viewNumber = propArray[1];
  } 
}
