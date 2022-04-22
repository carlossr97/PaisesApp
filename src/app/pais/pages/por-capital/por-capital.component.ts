import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../servicios/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  error:boolean=false;
  termino:string='';
  respuesta:Pais[]=[];
  sugerenciasPais:Pais[]=[];
  noSugerencia:boolean=false;
  constructor(
    private paisService:PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.termino = termino;
    if (this.termino.trim()){
      this.paisService.buscarCapital(this.termino).subscribe(
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
    this.paisService.buscarCapital(termino).subscribe(
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
