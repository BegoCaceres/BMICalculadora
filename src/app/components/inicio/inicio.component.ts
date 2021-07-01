import { Component, OnInit } from '@angular/core';
//para el ruteo de un componente a otro. En este caso
//cuando le damos a calcular cambia al componente Resultado
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  //variables por defecto
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = "Masculino";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //funcion que resta a la edad o al peso segun se mande e o p
  Menos(s: string): void {
    if (s === 'p') {
      this.peso = this.peso - 1;
    }
    else
      if (s === 'e') {
        this.edad = this.edad - 1;
      }
  }

  //funcion que suma a la edad o al peso segun se mande e o p
  Mas(s: string): void {
    if (s === 'p') {
      this.peso = this.peso + 1;
    }
    else
      if (s === 'e') {
        this.edad = this.edad + 1;
      }
  }
  
  //capturamos el value del evento para saber el valor del boton
  cambiarAltura(event: any) {
    console.log(event.target.value);
    this.altura = event.target.value;
  }

  //
  femenino(){
    this.sexo = "Femenino";
  }

  masculino(){
    this.sexo = "Masculino";
  }

  calcularBMI(){
  //vamos a realizar unos calculos
  //BMI = peso(kg) / altura(m)elevado2
  //pasamos la altura a metros porque esta en cm diviendo entre 100
  const BMI = this.peso / Math.pow(this.altura/100, 2);
  console.log(BMI);
  //pasamos el BMI redondeado con el tofixed(1) al componente resultado
  this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }

}
