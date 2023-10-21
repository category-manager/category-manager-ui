import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent } from './search/search.component';
import { LogoComponent } from './logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SearchComponent,
    LogoComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarComponent,
    SearchComponent,
    LogoComponent,
    NavigationComponent
  ]
})
export class CmToolbarModule { }
