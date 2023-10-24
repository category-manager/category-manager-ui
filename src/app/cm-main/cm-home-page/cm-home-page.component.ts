import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';
import { InternalDataService } from 'src/app/internal-data.service';
import { GroupedCategoriesResponse } from 'src/app/models/grouped-categories-response';
import { TypeaheadService } from 'src/app/typeahead.service';
@Component({
  selector: 'app-cm-home-page',
  templateUrl: './cm-home-page.component.html',
  styleUrls: ['./cm-home-page.component.css'],
  providers: [TypeaheadService, CategoriesService, InternalDataService]
})
export class CmHomePageComponent {

  @Output("modalEvent")
  modalEvent = new EventEmitter();

  groupedCategories: GroupedCategoriesResponse  = new GroupedCategoriesResponse();
  linkedCats !: Array<String>;
  unlinkedCats !: Array<String>;
  rootCats !: Array<String>;

  constructor(private typahead: TypeaheadService, 
    private categoriesService: CategoriesService,
    private internalData: InternalDataService) {}

  ngOnInit() {
    this.getGroupedCategories();
  }

  getGroupedCategories(): void {
    this.categoriesService.getGroupedCategories().then(res => 
      res.subscribe(
        {
          next: (val) => { 
            console.log('entered grouped cat subscription now.');
            this.groupedCategories = val;
          },
          error: (err) => console.log(err)
        }
      ));
  }

  onCreate() {
    this.modalEvent.emit([true, 0]);
  }

  onDelete() {
    this.modalEvent.emit([true, 1]);
  }
  onImport() {
    this.categoriesService.importFromDb()
      .then(sub => {
        sub.subscribe(res => alert('flush and DB Import complete!'))
      });
  }


}

