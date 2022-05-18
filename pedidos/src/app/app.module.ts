import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ListaPedidosComponent } from './listaPedidos/listaPedidos.component';
import { HeaderComponent } from './header/header.component';
import { PedidoComponent } from './pedido/pedido.component';

@NgModule({
  declarations: [			
    AppComponent,
      ListaPedidosComponent,
      HeaderComponent,
      PedidoComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
