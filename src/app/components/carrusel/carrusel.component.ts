import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotonComponent } from '../boton/boton.component';

@Component({
  selector: 'app-carrusel',
  imports: [RouterLink],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.scss',
})
export class CarruselComponent {}
