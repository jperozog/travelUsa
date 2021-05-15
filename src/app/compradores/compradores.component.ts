import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {NgForm} from '@angular/forms'
import {ComprasServicesService} from '../services/compras-services.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-compradores',
  templateUrl: './compradores.component.html',
  styleUrls: ['./compradores.component.scss']
})
export class CompradoresComponent implements OnInit {
  faStar = faStar;
  tituloSeleccionado:string=""
  contenidoSeleccionado:string=""
  general: any = [
    {
      id: 1,
      pregunta: "¿Cómo es el proceso de compra?",
      contenido: "1.	Llenas el formulario, 2.	Recibes una cotización a tu correo o whatsapp, 3.	Haces el pago con Pago Seguro Paypal, 4.	Nosotros encontramos un BRINKER, que compre en USA por ti, 5.	Recibes tu producto en las puertas de tu casa"
    },
    {
      id: 2,
      pregunta: "¿Qué pasa si no encuentran lo que pedí? ",
      contenido: "Te devolvemos el 100% de tu dinero"
    },
    {
      id: 3,
      pregunta: "¿Qué pasa si se equivocan con mi pedido?",
      contenido: "Tienes 24 horas después de haber recibido tu pedido para contactarte con nosotros, recogemos el producto en tu hogar y te devolvemos el 100% de tu dinero"
    },
    {
      id: 4,
      pregunta: "¿Qué sucede tras pagar mi pedido?",
      contenido: "Retenemos tu dinero hasta que confirmes de haberlo recibido en óptimas condiciones. Ya cuando hayas confirmado le pagaremos al BRINKER el costo del producto más su comisión por traerlo "
    },
    {
      id: 5,
      pregunta: "¿Cómo creo un pedido?",
      contenido: "1.	Llena el formulario, 2.	Recibe el mail o whatsapp cotizándote, 3.	Paga por vía Paypal"
    },
    {
      id: 6,
      pregunta: "¿Dónde recibo mi pedido?",
      contenido: "Te lo enviamos a la dirección que tu prefieras"
    },
    {
      id: 7,
      pregunta: "¿Por qué es el BRINKER quien compra mi artículo?",
      contenido: "Porque así el BRINKER puede tener la certeza del equipaje que lleva consigo"
    },
    {
      id: 8,
      pregunta: "¿Qué sucede si mi pedido llega roto o incompleto?",
      contenido: "Como comprador, estás cubierto por la garantía BRINKER, tu dinero no se le será entregado al comprador hasta que hayas confirmado la entrega de tu pedido. Tienes derecho a aceptar o no el artículo si el estado del artículo no es el acordado (color, cantidad, artículo incorrecto o si está dañado o roto). Asegúrate de inspeccionar tu pedido antes de confirmar la entrega. Los compradores tienen un periodo de 24 horas para reportar un pedido como dañado o incompleto. Recomendamos a los viajeros contratar seguro de viaje que cubra daños por pérdida de equipaje, etc. Si tu producto está dañado, roto o no es correcto, lo mejor es informarle a BRINKER inmediatamente. En algunos casos el BRINKER podrá traer un reemplazo. Caso contrario, la única solución es cancelar el pedido y te devolvemos al 100% tu dinero"
    },
  ]
  titularAlerta:string = "Tus Datos han sido enviados. Te contactaremos en breve."

  constructor(public compraService:ComprasServicesService) { }

  ngOnInit(): void {
  }

  agregarCompra(form:NgForm){
    
  this.compraService.enviarDatosCompra(form.value).subscribe(res=>console.log(res),err=>console.log(err))

  this.compraService.compraDatos.nombre = ''
  this.compraService.compraDatos.telefono = ''
  this.compraService.compraDatos.correo = ''
  this.compraService.compraDatos.link = ''
  
  Swal.fire({
    position: 'top-start',
  icon: 'success',
  title: 'Datos Enviados con Exito!',
  showConfirmButton: false,
  timer: 1500});
  }

  seleccionarPregunta(id:number){


    
    this.general.forEach((e:any) => {
        if (e["id"] == id) {
          this.tituloSeleccionado = e["pregunta"]
          this.contenidoSeleccionado = e["contenido"]

          let selected = document.getElementById(e["id"].toString());

          let a = e["id"] + 100;

          let selected2 = document.getElementById(a.toString());

          selected?.setAttribute("style", "padding-left:1%; padding-right:1%;    box-shadow: rgba(22, 27, 29, 0.25) 0px 4px 16px;border-radius:5px; margin-top:1%;");
          selected2?.setAttribute("style", "color:#01A0E2");
        }else{
          let selected = document.getElementById(e["id"].toString());

          let a = e["id"] + 100;

          let selected2 = document.getElementById(a.toString());

          selected?.setAttribute("style", "padding-left:0; padding-right:0;    box-shadow: none;border-radius:0 px;margin-top:0 %; ");
          selected2?.setAttribute("style", "color:gray");
        }
    });
    
  }

}
