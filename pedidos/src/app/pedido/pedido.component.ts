import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../model/Producto';
import { PedidosService } from '../service/pedidos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  title:string = "Hacer Pedido"
  producto!: Producto[];
  productos : Producto[] = [];
  
 
  constructor(private service : PedidosService,private router: Router){
    service.buscarProductos().subscribe(data => this.productos=data)
  }

  routePedidos(){
    this.router.navigate([
      ''
    
    ]);
  }

}
