
import { Component } from '@angular/core';
import { Pedido } from '../model/Pedido';


@Component({
  selector: 'app-root',
  templateUrl: './listaPedidos.component.html',
  styleUrls: ['./listaPedidos.component.css']
})
export class ListaPedidosComponent {
  title = 'permisos';
  tablePedidosHidden:boolean = false;
  pedidos: Pedido[] = [];
}
