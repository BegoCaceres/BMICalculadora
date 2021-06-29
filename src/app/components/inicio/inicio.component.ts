import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

}
