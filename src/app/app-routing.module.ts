import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertDataComponent } from './convert-data/convert-data.component';
import { ConvertImgBase64Component } from './convert-img-base64/convert-img-base64.component';
import { ConvertBase64ImgComponent } from './convert-base64-img/convert-base64-img.component';

const routes: Routes = [
  { path: '', component: ConvertDataComponent },
  { path: 'img-base64', component: ConvertImgBase64Component },
  { path: 'base64-img', component: ConvertBase64ImgComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
