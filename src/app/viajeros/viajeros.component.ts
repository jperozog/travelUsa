import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-viajeros',
  templateUrl: './viajeros.component.html',
  styleUrls: ['./viajeros.component.scss']
})
export class ViajerosComponent implements OnInit {
  faStar = faStar;
  tituloSeleccionado:string=""
  contenidoSeleccionado:string=""
  general: any = [
    {
      id: 1,
      pregunta: "¿Cómo se garantiza mi pago?",
      contenido: "Tu pago está asegurado y garantizado por Grabr. Los compradores pagan por adelantado y no pueden cancelar una vez pagan."
    },
    {
      id: 2,
      pregunta: "¿Por qué compro yo el producto? ",
      contenido: "Compras el producto para saber qué es lo que llevas y ser responsable del contenido."
    },
    {
      id: 3,
      pregunta: "¿Dónde entrego el producto?",
      contenido: "Al aceptar comprar un producto se te hará saber donde entregarlo, la mayoría de las veces es en las de algún courrier cerca a tu domicilio"
    },
    {
      id: 4,
      pregunta: "¿Puedo retirar mi oferta de entrega?",
      contenido: "Si no puedes entregar el artículo todavía puedes cancelar la oferta pero es posible que esto afecte negativamente a las puntuaciones de tu perfil. Recuerda contactarnos para que sepamos que no vas a poder enviar el artículo y que cancelarás el pedido.  "
    },
    {
      id: 5,
      pregunta: "¿Cómo recibo el pago??",
      contenido: "El pago se te hará 24 horas después de que el comprador haya recibido su producto en tu cuenta Paypal que te tienes que crear para recibir tu dinero"
    },
    {
      id: 6,
      pregunta: "El objeto no cabe en mi maleta",
      contenido: "Si el objeto no cabe en tu maleta, puedes sacarlo de su envoltorio original. Asegúrate de contactarnos para notificarnos y a su vez nosotros le notifiquemos al comprador de que su compra llegará sin envoltorio"
    }
  ]
  constructor() { }

  ngOnInit(): void {
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
