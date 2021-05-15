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
    return this.http.post("http://201.249.147.139:81/maraveca/public/index.php/enviocorreos",compra)
  }

  enviarDatosViaje(viaje:compra){
    return this.http.post("http://201.249.147.139:81/maraveca/public/index.php/enviocorreos2",viaje)
  }


}
