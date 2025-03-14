import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';

@Component({
  selector: 'app-producto',
  imports: [HeaderComponent, FooterComponent, CalendarComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss',
})
export class ProductoComponent {}
