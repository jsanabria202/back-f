import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent },
];
