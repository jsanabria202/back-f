import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto-final';
}
