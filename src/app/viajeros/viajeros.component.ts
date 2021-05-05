import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-viajeros',
  templateUrl: './viajeros.component.html',
  styleUrls: ['./viajeros.component.scss']
})
export class ViajerosComponent implements OnInit {
  faStar = faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
