import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BotonComponent } from '../../components/boton/boton.component';




@Component({
  selector: 'app-contacto',
  imports: [HeaderComponent, FooterComponent, BotonComponent,

  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss',
})
export class ContactoComponent {}
