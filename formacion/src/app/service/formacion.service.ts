import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Alumno } from '../model/Alumno';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
urlAlumnosCurso: string = "http://localhost:8080/11_proyecto_formacion/BuscadorAlumnosCurso";
urlCursosAlumno: string = "http://localhost:8080/11_proyecto_formacion/BuscadorCursosAlumno";
//url:string="Buscador"
urlCursos:string="http://localhost:8080/11_proyecto_formacion/BuscarCursos"
urlAlumnos:string="http://localhost:8080/11_proyecto_formacion/BuscarAlumnos"
//urlCursos:string="BuscarCursos"
cursos:string[]|undefined;
constructor(private http : HttpClient ) { 
  
}

buscarAlumnosCurso(curso : string){
  return this.http.get<Alumno[]>(this.urlAlumnosCurso,{params:{nombreCurso:curso}})
}
buscarCursosAlumno(alumno : string){
  return this.http.get<Curso[]>(this.urlCursosAlumno,{params:{usuario:alumno}})
}
buscarCursos(){
return this.http.get<string[]>(this.urlCursos)
}
buscarAlumnos(){
  return this.http.get<Alumno[]>(this.urlAlumnos)
}


}
