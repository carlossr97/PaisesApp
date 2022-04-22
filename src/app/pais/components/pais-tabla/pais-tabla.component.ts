import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {
  @Input() respuesta:any[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
