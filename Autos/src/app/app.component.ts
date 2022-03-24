import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VENTA DE AUTOS';

  //arreglo que va a guardar la informacion de los autos
  Autos = [
    {
      'modelo': 'Versa',
      'marca': 'Nissan',
      'year': 2016
    },
    {
      'modelo': 'Aveo',
      'marca': 'Chevrolet',
      'year': 2018
    },
    {
      'modelo': 'Vento',
      'marca': 'VW',
      'year': 2018
    }
  ];

  //modelo para actualizar datos... aqui se van a guardar los datos temporales
  model:any = {}; 
  model2:any = {}; 

  agregarAuto():void{
    this.Autos.push(this.model);
  }

  eliminarAuto(i: number):void{
    var pregunta = confirm ('Estas seguro de querer eliminarlo?');
    if(pregunta){
      this.Autos.splice(i, 1);
    }
  }

  myValue: any;
  
  modificarAuto(i: number):void{
    this.model2.modelo = this.Autos[i].modelo;
    this.model2.marca = this.Autos[i].marca;
    this.model2.year = this.Autos[i].year;
    this.myValue = i;
  }



  actualizarAuto():void{
    let i = this.myValue;
    for(let j = 0; j < this.Autos.length; j++){
      if( i == j){
        this.Autos[i] = this.model2;
        this.model2 = {};
      }
    }
  }


}
