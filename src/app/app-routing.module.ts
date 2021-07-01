import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

//Rutas si esta vacia http://localhost:4200/ vamos al componente inicio
//Si tiene resultado http://localhost:4200/resultado vamos al componente Resultado
//si se pone cualquier otra ruta redireccionamos al componente inicio
const routes: Routes = [
  { path: '', component: InicioComponent },
  //en este path el :valor sera el BMI que mandamos desde el boton CalcularBMI en el inicio.ts en la ruta
  { path: 'resultado/:valor', component: ResultadoComponent },
  { path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
