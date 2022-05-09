import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' }, // quando path for vazio, irá abrir o courses
  {
    path: 'courses',//Irá abrir esse caminho que leva para o módulo filho "CoursesModule"
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];

//Para criar o app.module.ts: ng generate module app-routing --flat --module=app
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
