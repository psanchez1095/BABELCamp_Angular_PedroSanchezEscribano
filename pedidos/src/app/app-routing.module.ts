import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaPedidosComponent } from './listaPedidos/listaPedidos.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [ 
  {
  path : '',
  component : ListaPedidosComponent  
},
{
  path : 'pedido',
  component :PedidoComponent  
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
