import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto } from '../model/Producto';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url: string = "http://localhost:8080/06_tienda_ajax/Buscador";
  constructor(private http : HttpClient ) { }

  buscar(seccion : string){
    return this.http.get<Producto[]>(this.url,{params:{seccion:seccion}})
  }
}
