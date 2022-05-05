import {Component} from '@angular/core'

@Component({
 selector:'app-contador',
 template:`
      <h1> {{title}}</h1>
  <h3>las Base es: <strong>{{base}}</strong></h3>

  <button (click)=" acumulador(base)">+{{base}}</button>
      <span>{{contador}}</span>
      <button (click)=" acumulador(-base)">-{{base}}</button>
 `

})

export class ContadorComponent{

    title = 'Contador App';
    contador:number=10;
   base:number=5;
 
 
   sumar(){
     this.contador=this.contador+1;
   }
 
   restar(){
     this.contador -=1;
   }
 
   acumulador(valor:number){
     this.contador+=valor;
   
   }

}