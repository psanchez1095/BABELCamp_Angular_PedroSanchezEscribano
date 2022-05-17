import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  urlPedidos: string =
  'http://localhost:7500/pedidos';

  urlProductos: string =
  'http://localhost:7000/productos';

cursos: string[] | undefined;
constructor(private http: HttpClient) { }


}
