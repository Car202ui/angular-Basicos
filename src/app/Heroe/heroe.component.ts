
import{Component} from '@angular/core';

@Component({
selector:'app-heroe',
templateUrl:'./heroe.component.html'

})

export class HeroeComponent{
  nombre:string='IronMan';
  edad:number=35;


  get nombreCapitalizado():string{
     return this.nombre.toUpperCase(); 
  }

  obtenerNombre():string{
       return `${this.nombre}-${this.edad}`;
  }


  cambiarNombre():void{
  this.nombre='Hulk';
  this.edad=40;
  }

  cambiarEdad():void{
      this.edad=45;
  }
}
