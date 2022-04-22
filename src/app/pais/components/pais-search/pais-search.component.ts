import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-search',
  templateUrl: './pais-search.component.html',
  styleUrls: ['./pais-search.component.css']
})
export class PaisSearchComponent implements OnInit {

  @Output() onEnter:EventEmitter<string>= new EventEmitter;
  @Output() onDebounce:EventEmitter<string>= new EventEmitter;

  debouncer:Subject<string>=new Subject();
  @Input() placeholder:string='';
  termino:string="";
  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)

    )
    .subscribe(valor=>{
      this.onDebounce.emit(valor)
    })
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada(){
     this.debouncer.next( this.termino ) 
  }
}
