import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAlumnosByCursoComponent } from './formAlumnosByCurso/formAlumnosByCurso.component';
import { FormCursosByAlumnoComponent } from './formCursosByAlumno/formCursosByAlumno.component';
import { MenuBusquedasComponent } from './menuBusquedas/menuBusquedas.component';

const routes: Routes = [

    {
        path : 'alumnosByCurso',
        component : FormAlumnosByCursoComponent
      },
      {
        path : 'cursosByAlumno',
        component : FormCursosByAlumnoComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }