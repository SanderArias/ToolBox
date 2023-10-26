import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversidadesPorPaisPage } from './universidades-por-pais.page';

const routes: Routes = [
  {
    path: '',
    component: UniversidadesPorPaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversidadesPorPaisPageRoutingModule {}
