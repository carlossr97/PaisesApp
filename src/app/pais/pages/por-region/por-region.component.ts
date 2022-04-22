import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../servicios/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {
  regiones:string[]=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva:string='';
  pais:Pais[]=[];
  constructor(
    private servicio:PaisService
  ) { }

  ngOnInit(): void {
  }

  activarRegion(termino:string){
    
    if(termino===this.regionActiva){ return;}
    this.regionActiva=termino;

    this.servicio.buscarRegion(termino).subscribe(
      resp=>{
        this.pais=resp
        console.log(this.pais)
      }
    )

  }

  

}
