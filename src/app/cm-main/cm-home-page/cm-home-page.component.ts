import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';
import { Category } from 'src/app/models/category';
import { GroupedCategoriesResponse } from 'src/app/models/grouped-categories-response';
import { TypeaheadService } from 'src/app/typeahead.service';
@Component({
  selector: 'app-cm-home-page',
  templateUrl: './cm-home-page.component.html',
  styleUrls: ['./cm-home-page.component.css'],
  providers: [TypeaheadService, CategoriesService]
})
export class CmHomePageComponent {

  searchResult: Category = new Category();
  groupedCategories: GroupedCategoriesResponse  = new GroupedCategoriesResponse();
  linkedCats !: Array<String>;
  unlinkedCats !: Array<String>;
  rootCats !: Array<String>;

  constructor(private typahead: TypeaheadService, 
    private categoriesService: CategoriesService) {}

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

}
