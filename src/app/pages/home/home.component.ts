import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, CarruselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
