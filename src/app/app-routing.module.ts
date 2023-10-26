import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'predecir-generos',
    loadChildren: () => import('./predecir-generos/predecir-generos.module').then( m => m.PredecirGenerosPageModule)
  },
  {
    path: 'predecir-edad',
    loadChildren: () => import('./predecir-edad/predecir-edad.module').then( m => m.PredecirEdadPageModule)
  },
  {
    path: 'universidades-por-pais',
    loadChildren: () => import('./universidades-por-pais/universidades-por-pais.module').then( m => m.UniversidadesPorPaisPageModule)
  },
  {
    path: 'clima-rd',
    loadChildren: () => import('./clima-rd/clima-rd.module').then( m => m.ClimaRdPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
