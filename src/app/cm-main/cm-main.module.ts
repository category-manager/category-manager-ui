import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmHomePageComponent } from './cm-home-page/cm-home-page.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    CmHomePageComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CmHomePageComponent,
    SearchResultsComponent
  ]
})
export class CmMainModule { }
