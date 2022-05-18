import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../model/Pedido';
import { Producto } from '../model/Producto';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  url:string="http://localhost:10000";

  constructor(private http:HttpClient) { }

  buscarPedidos(){
    return this.http.get<Pedido[]>(`${this.url}` + "/spedidos/pedidos/Pedidos");
  }
  buscarProductos(){
    return this.http.get<Producto []>(`${this.url}` +"/sproductos/productos/Productos");
  }

  pedido(codigoProducto: Number, unidades: Number){
    return this.http.post<boolean>(`${this.url}/spedidos/pedidos/Pedido`, {
      codigoProducto: codigoProducto,
      unidades: unidades
    });
  }

}
