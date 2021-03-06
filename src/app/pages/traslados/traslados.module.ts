import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ngPrimeModule } from '../../ngprime.module';
import { TrasladosAgregarComponent } from './agregar/traslados-agregar.component';
import { TrasladosListarComponent } from './listar/traslados-listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';




@NgModule({
  declarations: [
    TrasladosAgregarComponent,
    TrasladosListarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ngPrimeModule,
    ProgressSpinnerModule
  ]
})
export class TrasladosModule { }
