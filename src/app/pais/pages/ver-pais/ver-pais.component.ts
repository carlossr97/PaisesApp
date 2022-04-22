import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../servicios/pais.service';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [ 
  ]
})
export class VerPaisComponent implements OnInit {

  error:boolean=false;
  respuesta:Pais[]=[];
  termino:string="";
  constructor(
    private actvatedRoutes:ActivatedRoute,
    private servicio:PaisService
  ) { }

  ngOnInit(): void {
    this.actvatedRoutes.params
    .pipe( switchMap( param => this.servicio.buscarPaisCode(param['id'])) 
    )
    .subscribe(
      
      (resp)=>{
        console.log("respuesta => ",resp);
        this.respuesta=resp;
        
      }
     

    )
  }
  buscar(termino:string){
    
  }


}
