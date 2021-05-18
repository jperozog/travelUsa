import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {compra} from '../models/compras'
import {viaje} from '../models/viaje'
@Injectable({
  providedIn: 'root'
})
export class ComprasServicesService {

  compraDatos: compra ={
    nombre:"",
    telefono:"",
    correo:"",
    link:""
  }

  viajeDatos: viaje ={
    nombre:"",
    telefono:"",
    correo:"",
    fecha:"",
    a:""
  }

  constructor(private http: HttpClient) { }


  enviarDatosCompra(compra:compra){
    return this.http.post("https://brinkerapp.herokuapp.com/mail/sendmail",compra)
  }

  enviarDatosViaje(viaje:compra){
    return this.http.post("https://brinkerapp.herokuapp.com/mail/sendmaila",viaje)
  }


}
