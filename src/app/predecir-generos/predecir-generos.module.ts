import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredecirGenerosPageRoutingModule } from './predecir-generos-routing.module';

import { PredecirGenerosPage } from './predecir-generos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredecirGenerosPageRoutingModule
  ],
  declarations: [PredecirGenerosPage]
})
export class PredecirGenerosPageModule {}
