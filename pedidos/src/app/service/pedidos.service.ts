import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  url:string="http://localhost:10000";

  constructor(private http:HttpClient) { }

  buscarPedidos(){
    return this.http.get<Pedido[]>(`${this.url}` + "/spedidos/pedidos/Pedidos");
  }


}
