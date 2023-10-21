import { NgModule, createEnvironmentInjector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmMainModule } from './cm-main/cm-main.module';
import { CmToolbarModule } from './cm-toolbar/cm-toolbar.module';
import { CmTreeViewModule } from './cm-tree-view/cm-tree-view.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CmMainModule,
    CmToolbarModule,
    CmTreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
