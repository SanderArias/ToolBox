import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredecirGenerosPage } from './predecir-generos.page';

const routes: Routes = [
  {
    path: '',
    component: PredecirGenerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredecirGenerosPageRoutingModule {}
