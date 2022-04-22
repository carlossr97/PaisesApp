import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styleUrls: ['./capital-tabla.component.css']
})
export class CapitalTablaComponent implements OnInit {
  @Input() respuesta:any[]=[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.respuesta)
  }

}
