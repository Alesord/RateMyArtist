import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdicionRoutingModule } from './edicion-routing.module';
import { AgregarFormComponent } from './agregar-form/agregar-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PruebaComponent } from './prueba/prueba.component';


@NgModule({
  declarations: [
    AgregarFormComponent,
    PruebaComponent,
  ],
  imports: [
    CommonModule,
    EdicionRoutingModule,
    ReactiveFormsModule
  ]
})
export class EdicionModule { }
