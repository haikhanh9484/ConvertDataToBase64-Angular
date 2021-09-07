import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertDataComponent } from './convert-data/convert-data.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
