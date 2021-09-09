import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ConvertDataComponent } from './convert-data/convert-data.component';
import { ConvertImgBase64Component } from './convert-img-base64/convert-img-base64.component';
import { ConvertBase64ImgComponent } from './convert-base64-img/convert-base64-img.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ConvertDataComponent,
    ConvertImgBase64Component,
    ConvertBase64ImgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
