import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimiento } from '../model/Movimiento';

@Injectable({
  providedIn: 'root'
})
export class BancaService {

   urlConsultarMatriculasByRange: string =
  'http://localhost:8080/16_sistema_bancario/ConsultaMovimientos';




cursos: string[] | undefined;
constructor(private http: HttpClient) { }


buscarMovimientos(dateIni: string, dateFin: string,numeroCuenta:number) {
  return this.http.get<Movimiento[]>(this.urlConsultarMatriculasByRange, {
    params: { numeroCuenta:numeroCuenta ,fechaIni: dateIni, fechaFin: dateFin },
  });
}


}
