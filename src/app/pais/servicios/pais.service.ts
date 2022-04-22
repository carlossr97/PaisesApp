import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL:string="https://restcountries.com/v3.1"

  constructor(
    private http:HttpClient
  ) { }
  
  buscarPais (termino:string): Observable<Pais[]>{
    const url = `${this.apiURL}/name/${termino}`

    return this.http.get<Pais[]>( url )

  }

  buscarCapital(termino:string){
    const url=`${this.apiURL}/capital/${termino}` 
    return this.http.get<Pais[]>( url )
  }

  buscarPaisCode(termino:string){
    const url=`${this.apiURL}/alpha?codes=${termino}` 
    return this.http.get<Pais[]>( url )
  }

  buscarRegion (termino:string){
    const url=`${this.apiURL}/region/${termino}` 
    return this.http.get<Pais[]>( url )
  }


}
