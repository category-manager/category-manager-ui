import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories.service';
import { Category } from 'src/app/models/category';
import { TypeaheadService } from 'src/app/typeahead.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @ViewChild("searchInput", {static: true}) searchInput!: ElementRef;
  
  suggestions!: Array<string>;
  searchResult!: Category;
  isHideSuggestBox: boolean = true;
  selectedCategory: string = "";

  constructor(private typahead: TypeaheadService, 
    private categoriesService: CategoriesService,
    private route: Router
    ) {}
  ngOnInit() {
    
  }

  onSelect(event: any, idx: number) {
    this.isHideSuggestBox = true;
    this.selectedCategory = this.suggestions[idx];
    this.searchInput.nativeElement.value = this.selectedCategory;
    // console.log('selected category = ', this.selectedCategory);
    
  }
  onOpen() {
    console.log('on get called');
    let catId = this.selectedCategory.slice(this.selectedCategory.lastIndexOf("-") + 2)
    let url = this.route.createUrlTree(['/' + catId]);
    window.open(url.toString(), '_blank');
  }

  onType(event: any): void {
    
    let query: string =(event.target.value).trim();
    if(query.length < 2)
      this.suggestions = [];
    this.suggestions = this.typahead.getSuggestions(query);
    this.isHideSuggestBox = this.suggestions.length > 0;
    // console.log(this.suggestions);
    
  } 

  onSearch(query: string): void {
    this.searchResult = this.categoriesService.getCategoryById(query);
  }

}
