import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movimiento } from './model/Movimiento';
import { BancaService } from './services/Banca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Consultar Matriculas';
  movimientos: Movimiento[] | undefined;
  
  dateIni: string = '';
  dateFin: string = '';
  numeroCuenta: number = 0;

  tableMovimientosHidden: boolean = false;

  constructor(private service: BancaService, private router: Router) {}
 

  consultarMovimientos() {

    this.service
      .buscarMovimientos(this.dateIni, this.dateFin,this.numeroCuenta)
      .subscribe((data) => (this.movimientos = data));
    this.tableMovimientosHidden = false;
  }

}
