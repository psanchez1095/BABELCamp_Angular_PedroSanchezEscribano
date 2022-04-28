import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../model/Alumno';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root',
})
export class FormacionService {
  urlAlumnosCurso: string =
    'http://localhost:8080/12_proyecto_formacion_spring_data_jpa/BuscadorAlumnosCurso';
  urlCursosAlumno: string =
    'http://localhost:8080/12_proyecto_formacion_spring_data_jpa/BuscadorCursosAlumno';
  urlCursos: string =
    'http://localhost:8080/12_proyecto_formacion_spring_data_jpa/BuscarCursos';
  urlAlumnos: string =
    'http://localhost:8080/12_proyecto_formacion_spring_data_jpa/BuscarAlumnos';

  //urlAlumnosCurso:string="BuscadorAlumnosCurso"
  //urlCursosAlumno:string="BuscadorCursosAlumno"
  //urlCursos:string="BuscarCursos"
  //urlAlumnos:string="BuscarAlumnos"

  cursos: string[] | undefined;
  constructor(private http: HttpClient) {}

  buscarAlumnosCurso(curso: string) {
    return this.http.get<Alumno[]>(this.urlAlumnosCurso, {
      params: { nombreCurso: curso },
    });
  }
  buscarCursosAlumno(alumno: string) {
    return this.http.get<Curso[]>(this.urlCursosAlumno, {
      params: { usuario: alumno },
    });
  }
  buscarCursos() {
    return this.http.get<Curso[]>(this.urlCursos);
  }
  buscarAlumnos() {
    return this.http.get<Alumno[]>(this.urlAlumnos);
  }
}
