import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarComponent } from './page/consultar/consultar.component';
import { HomeComponent } from './page/home/home.component';
import { ModificarComponent } from './page/modificar/modificar.component';
import { RegistrarComponent } from './page/registrar/registrar.component';

const routes: Routes = [

  {path:'',component: HomeComponent},
  {path:'registrar',component:RegistrarComponent},
  {path:'consultar',component:ConsultarComponent},
  {path:'modificar/:numero',component:ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
