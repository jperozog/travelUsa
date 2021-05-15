import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompradoresComponent } from './compradores/compradores.component';
import { ViajerosComponent } from './viajeros/viajeros.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ComprasServicesService} from './services/compras-services.service'

@NgModule({
  declarations: [
    AppComponent,
    CompradoresComponent,
    ViajerosComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ComprasServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
