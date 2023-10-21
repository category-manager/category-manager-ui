import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TypeaheadService {

  constructor(private http: HttpClient) {
  }
  url: string = "http://localhost:8090/api/suggest?query=";
  public getSuggestions(query: string): Array<string> {
    // console.log("typeahead request made for query = ", query);
    
    let suggestions: Array<string> = new Array<string>();
    const onSuccess = (v: any) => {
      v.forEach( (val: string) => suggestions.push(val))
    };
    this.http.get(this.url + query)
      .subscribe({
        next: onSuccess,
        error: (e) => { 
          console.log(e);
        },
        complete: () => {}
      });
    return suggestions;
  }

}
