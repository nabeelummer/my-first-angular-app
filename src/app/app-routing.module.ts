import { componentFactoryName } from '@angular/compiler';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnishaComponent } from './anisha/anisha.component';
import { NasiComponent } from './nasi/nasi.component';

const routes: Routes = [
  {
    path : '',
    component: AnishaComponent

  },
  {
     path : 'nasi',
    component: NasiComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
