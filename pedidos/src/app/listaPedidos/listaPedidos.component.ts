
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../model/Pedido';
import { PedidosService } from '../service/pedidos.service';


@Component({
  selector: 'app-root',
  templateUrl: './listaPedidos.component.html',
  styleUrls: ['./listaPedidos.component.css']
})
export class ListaPedidosComponent {
  title = 'permisos';
  pedidos: Pedido[] = [];
  constructor(private service : PedidosService,private router: Router){
    service.buscarPedidos().subscribe(data => this.pedidos=data)
  }

  

  routeNuevoPedido(){
    this.router.navigate([
      'pedido'
    
    ]);
  }
}
