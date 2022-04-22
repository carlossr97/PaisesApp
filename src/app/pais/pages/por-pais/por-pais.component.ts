import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../servicios/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ `
            li{
              cursor:pointer;
            }
            `
  ]
})
export class PorPaisComponent  {
  termino:string="";
  public respuesta:any[]=[];
  error:boolean=false;
  noSugerencia:boolean=false;
  sugerenciasPais:Pais[]=[];

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.termino = termino;
    if (this.termino.trim()){
      this.paisService.buscarPais(this.termino).subscribe(
        (resp:Pais[]) =>{
          this.respuesta=resp;
          this.error=false;
          console.log(this.respuesta)
          this.noSugerencia=true;

        },(err=>{
          console.log("error: ",err.status)
          this.error=true;
        })
      
        )
      
    }
    
  }
  
  sugerencias(termino:string){
    this.paisService.buscarPais(termino).subscribe(
      resp=>{
        this.sugerenciasPais=resp.splice(0,5);
        this.noSugerencia=false;
        
      },
      (error=>{
        this.noSugerencia=true;
      })

    )

  }



}
