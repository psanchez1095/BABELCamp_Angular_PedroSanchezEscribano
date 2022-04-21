import { Injectable } from '@angular/core';
import { Alumno } from '../model/Alumno';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  //url: string = "http://localhost:8080/07_tienda_ajax/Buscador";
  url:string="Buscador"
  //urlCursos:string="http://localhost:8080/07_proyecto_academia/BuscarCursos"
  urlCursos:string="BuscarCursos"
  cursos:string[]|undefined;
  constructor(private http : HttpClient ) { 
    
  }

  buscar(curso : string){
    return this.http.get<Alumno[]>(this.url,{params:{curso:curso}})
  }
  buscarCursos(){
  return this.http.get<string[]>(this.urlCursos)
  }
}
