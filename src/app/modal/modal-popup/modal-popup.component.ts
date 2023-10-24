import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { InternalDataService } from '../../internal-data.service';
import { CategoriesService } from 'src/app/categories.service';
import { CategoryRequest } from 'src/app/models/category-request';

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

  @Input("categoryId")
  categoryId: string = 'default';
  data: string = '';
  parents: string = '';
  
  displayMessage: string = '';

  @Output("showModalEvent")
  showModalEvent = new EventEmitter<boolean>();

  constructor(private internalData: InternalDataService,
    private categoryService: CategoriesService){
  }

  ngOnInit() {
  }
  onClose() {
    this.showModal = false;
    this.showModalEvent.emit(this.showModal);
    this.displayMessage = '';
    location.reload();
  }
  onCreate() {
    const request: CategoryRequest = new CategoryRequest();
    request.requestType = 'create';
    request.categoryId = this.categoryId;
    var parents: string[] = this.parents.split(',');
    request.parents = parents.map(parent => parent.trim());
    request.data = this.data == '' || this.data == undefined ? null: JSON.parse(this.data);
    this.categoryService.createNewCategory(request).then(subs => {
      subs.subscribe(res => {
        console.log('category Created ', res);
        this.displayMessage = 'success';
      })
    })
  }
  onDelete() {
    this.categoryService.deleteCategory(this.categoryId).then(subs => {
      subs.subscribe(res => console.log('deleted ', res));
      this.displayMessage = 'success';
    });
  }
  onUpdate() {
    const request: CategoryRequest = new CategoryRequest();
    request.requestType = 'update';
    request.categoryId = this.categoryId;
    var parents: string[] = this.parents.split(',');
    request.parents = parents.map(parent => parent.trim());
    request.data = this.data == '' || this.data == undefined ? null: JSON.parse(this.data);
    this.categoryService.updateCategory(request).then(subs => {
      subs.subscribe(res => {
        console.log('category Created ', res);
        this.displayMessage = 'success';
        
      })
    });
  }

}
