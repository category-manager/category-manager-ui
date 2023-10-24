import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryResponse } from './models/category-response';
import { GroupedCategoriesResponse } from './models/grouped-categories-response';
import { Category } from './models/category';
import { Observable } from 'rxjs';
import { CategoryRequest } from './models/category-request';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  async deleteCategory(id: string) {
    const url: string = "http://localhost:8090/api/categories/delete?id=";
    var body = '';
    console.log(id);
    return await this.http.delete(url + id);
  }
  async updateCategory(request: CategoryRequest) {
    const url: string = "http://localhost:8090/api/categories/update";
    var body = '';
    console.log(request);
    return await this.http.post(url, request);
  }
  async createNewCategory(request: CategoryRequest) {
    const url: string = "http://localhost:8090/api/categories/create";
    var body = '';
    console.log(request.toString());
    return await this.http.post(url, request);
  }

  async importFromDb(): Promise<Observable<Object>> {
    const url: string = "http://localhost:8090/api/categories/import";
    return await this.http.get(url);
  }

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

  public async getCategoryHierarchyById(id: string | any, isDescendant: boolean): Promise<Observable<CategoryResponse>> {
    const url: string = "http://localhost:8090/api/categories/hierarchy/"
    return await this.http.get<CategoryResponse>(url + id + '?descendants=' + isDescendant);
  }

  public async getGroupedCategories(): Promise<Observable<GroupedCategoriesResponse>> {
    console.log('grouped categories API called ');
    
    const url: string = "http://localhost:8090/api/categories/all";
    return await this.http.get<GroupedCategoriesResponse>(url);
  }

}
