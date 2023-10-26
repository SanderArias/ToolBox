import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredecirEdadPageRoutingModule } from './predecir-edad-routing.module';

import { PredecirEdadPage } from './predecir-edad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredecirEdadPageRoutingModule
  ],
  declarations: [PredecirEdadPage]
})
export class PredecirEdadPageModule {}
