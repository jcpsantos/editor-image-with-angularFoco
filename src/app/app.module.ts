import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TamanhoComponent} from './tamanho/tamanho.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TamanhoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
