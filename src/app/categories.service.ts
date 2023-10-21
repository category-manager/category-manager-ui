import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryResponse } from './models/category-response';
import { GroupedCategoriesResponse } from './models/grouped-categories-response';
import { Category } from './models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public getCategoryById(id: string): Category {
    const url: string = "http://localhost:8090/api/categories/"
    let response: Category = new Category();
    const onSuccess = (v: any) => {
      response = v;
    };

    this.http.get(url + id).subscribe({
      next: onSuccess,
      error: (err) => { console.log(err);
      },
      complete: () => {}
    })
    
    return response;
  }

  public getCategoryHierarchyById(id: string): CategoryResponse {
    const url: string = "http://localhost:8090/api/categories/hierarchy/"
    let response: CategoryResponse = new CategoryResponse();
    const onSuccess = (v: any) => {
      response = v;
    };

    this.http.get(url + id).subscribe({
      next: onSuccess,
      error: (err) => { console.log(err);
      },
      complete: () => {}
    })
    
    return response;
  }

  public async getGroupedCategories(): Promise<Observable<GroupedCategoriesResponse>> {
    console.log('grouped categories API called ');
    
    const url: string = "http://localhost:8090/api/categories/all";
 /*   
    let response: GroupedCategoriesResponse = new GroupedCategoriesResponse();
    const onSuccess = (v: any) => {
      response = v;
    };

    this.http.get(url).subscribe({
      next: onSuccess,
      error: (err) => {
        console.log(err);
      },
      complete: () => {console.log('completed group cat fetch now.');

      }
    })
    */
    return await this.http.get<GroupedCategoriesResponse>(url);
  }

}
