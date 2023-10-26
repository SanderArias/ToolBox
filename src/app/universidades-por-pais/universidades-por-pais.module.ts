import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversidadesPorPaisPageRoutingModule } from './universidades-por-pais-routing.module';

import { UniversidadesPorPaisPage } from './universidades-por-pais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversidadesPorPaisPageRoutingModule
  ],
  declarations: [UniversidadesPorPaisPage]
})
export class UniversidadesPorPaisPageModule {}
