import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TypesComponent } from './types/types.component';
import { DeclarationsComponent } from './declarations/declarations.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TypesComponent, DeclarationsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
