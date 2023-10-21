import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmHomePageComponent } from './cm-home-page/cm-home-page.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CmHomePageComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CmHomePageComponent,
    SearchResultsComponent
  ]
})
export class CmMainModule { }
