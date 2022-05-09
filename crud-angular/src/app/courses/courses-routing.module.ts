import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
{path: "", component: CoursesComponent}
];

// é necessário exportar um componente para o mesmo ser visto por outros módulos
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
