import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompradoresComponent } from './compradores/compradores.component';
import { ViajerosComponent } from './viajeros/viajeros.component';

@NgModule({
  declarations: [
    AppComponent,
    CompradoresComponent,
    ViajerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
