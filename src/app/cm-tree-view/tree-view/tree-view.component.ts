import { Component } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router'; 
// ParamMap lets you access path-variables, query-params
// ActivatedRoute gives you access to data
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
  constructor(
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    var categoryId = this.route.snapshot.paramMap.get("id");
    var data = this.route.snapshot.data;
    console.log('data', data);
    console.log(categoryId);
    
  }
}

