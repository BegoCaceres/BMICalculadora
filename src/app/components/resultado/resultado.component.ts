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

  //inyectamos para poder atrapar la variable valor = BMI
  constructor(private route:ActivatedRoute) { 
    //el + es para parsear el valor string a number y el ! porque el objeto puede ser null para que no de error
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
  }

}
