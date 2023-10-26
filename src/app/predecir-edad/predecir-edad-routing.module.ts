import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredecirEdadPage } from './predecir-edad.page';

const routes: Routes = [
  {
    path: '',
    component: PredecirEdadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredecirEdadPageRoutingModule {}
