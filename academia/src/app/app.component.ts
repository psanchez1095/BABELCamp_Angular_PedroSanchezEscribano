import { Component } from '@angular/core';
import { Alumno } from './model/Alumno';
import { AlumnoService } from './service/alumno.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  curso: string ="";
  alumnos: Alumno[] | undefined;
  cursos: String[] | undefined;

  constructor(private service : AlumnoService){
    service.buscarCursos().subscribe(data => this.cursos=data)

  }

  busqueda(){
    this.service.buscar(this.curso).subscribe(data => this.alumnos=data);
  }
}
