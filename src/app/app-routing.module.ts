import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeViewComponent } from './cm-tree-view/tree-view/tree-view.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent
  },
  {
    path: "home",
    component: HomeLayoutComponent
  },
  {
    path: ":id",
    component: TreeViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
