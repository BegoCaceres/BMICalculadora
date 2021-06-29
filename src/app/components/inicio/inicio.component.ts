import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  //variables por defecto
  edad= 25;
  peso = 60;

  constructor() { }

  ngOnInit(): void {
  }
  
  //funcion que resta a la edad o al peso segun se mande e o p
  Menos(s:string):void{
   if (s === 'p')
   {
     this.peso = this.peso - 1;
   }
   else
   if (s === 'e')
   {
    this.edad = this.edad - 1;
   }
  }

  //funcion que suma a la edad o al peso segun se mande e o p
  Mas(s:string):void{
    if (s === 'p')
    {
      this.peso = this.peso + 1;
    }
    else
    if (s === 'e')
    {
     this.edad = this.edad + 1;
    }
   }

}
