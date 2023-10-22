import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { RouterModule } from '@angular/router';
import { CmToolbarModule } from '../cm-toolbar/cm-toolbar.module';



@NgModule({
  declarations: [
    TreeViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CmToolbarModule
  ],
  exports: [
    TreeViewComponent
  ]
})
export class CmTreeViewModule { }
