import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactData {
  nombre: string;
  correo: string;
  idea: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 
  private apiUrl = 'http://localhost:4200/contactar';

  constructor(private http: HttpClient) {}

  sendContact(contact: ContactData): Observable<any> {
    return this.http.post<any>(this.apiUrl, contact);
  }
}