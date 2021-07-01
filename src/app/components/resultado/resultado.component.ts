import { Component, OnInit } from '@angular/core';
//atrapa un valor de un componente a otro con el ruteo
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi:number;
  resultado:string;
  interpretacion:string;

  //inyectamos para poder atrapar la variable valor = BMI
  constructor(private route:ActivatedRoute) { 
    this.resultado = "";
    this.interpretacion = "";
    //el + es para parsear el valor string a number y el ! porque el objeto puede ser null para que no de error
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }
   
  //llamara a la funcion obtener resultado justo al cargar el componente
  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(){
   if (this.bmi >= 25){
     this.resultado = "Exceso de peso";
     this.interpretacion = "Tienes un peso corporal superior al normal. ¡Intente hacer más ejercicio!"
   } else if (this.bmi >= 18.5){
     this.resultado = "Normal";
     this.interpretacion ="Tienes un peso corporal normal. ¡Buen Trabajo!";
   } else {
     this.resultado = "Bajo peso";
     this.interpretacion = "Tienes un peso corporal más bajo de lo normal. ¡Puedes comer un poco más!"
   }
  }

}
