import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-compradores',
  templateUrl: './compradores.component.html',
  styleUrls: ['./compradores.component.scss']
})
export class CompradoresComponent implements OnInit {
  faStar = faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
