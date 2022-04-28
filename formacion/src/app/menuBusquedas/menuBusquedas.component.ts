import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menuBusquedas',
  templateUrl: './menuBusquedas.component.html',
  styleUrls: ['./menuBusquedas.component.css'],
})
export class MenuBusquedasComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  routeAlumnosByCurso() {
    this.router.navigate(['/alumnosByCurso']);
  }
  routeCursosByAlumno() {
    this.router.navigate(['/cursosByAlumno']);
  }
  routeindex() {
    this.router.navigate(['']);
  }
}
