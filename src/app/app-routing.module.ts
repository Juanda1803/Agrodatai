import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaquetaComponent } from '../app/maqueta/maqueta.component';
import { NoticiaComponent } from './noticia/noticia.component';//esta linea lo redirige a noticias
import { PerfilComponent } from './perfil/perfil.component'


const routes: Routes = [
  {
    path: 'noticias',
    component: MaquetaComponent
  },
  {
    path: 'noticias/:title',
    component: NoticiaComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
