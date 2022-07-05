import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarFormComponent } from './agregar-form/agregar-form.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {
    path: '',
    children: [
    { path: 'agregar-artista', component: AgregarFormComponent },
    { path: 'prueba', component: PruebaComponent },
   ]
  }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EdicionRoutingModule { }
