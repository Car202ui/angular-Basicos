import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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


