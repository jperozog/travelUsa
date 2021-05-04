import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompradoresComponent} from './compradores/compradores.component'
import {ViajerosComponent} from './viajeros/viajeros.component'

const routes: Routes = [
  { path: '', component: CompradoresComponent },
  { path: 'viajes', component: ViajerosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
