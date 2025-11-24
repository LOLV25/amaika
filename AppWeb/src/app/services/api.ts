import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../components/blog/blog';
import { IContacto } from '../interfaces/contacto';
import { IResena } from '../interfaces/resañas';
import { IBlog } from '../interfaces/Blog';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // Reseñas
  getReseñas(): Observable<IResena[]> {
    return this.http.get<IResena[]>(`${this.baseUrl}/reseñas`);
  }

  postReseña(data: IResena): Observable<IResena> {
    return this.http.post<IResena>(`${this.baseUrl}/reseñas`, data);
  }

  // Blog
  getBlogs(): Observable<IBlog[]> {
    return this.http.get<IBlog[]>(`${this.baseUrl}/blogs`);
  }

  postBlog(data: IBlog): Observable<IBlog> {
    return this.http.post<IBlog>(`${this.baseUrl}/blogs`, data);
  }

  // Contacto
  postContacto(data: IContacto): Observable<IContacto> {
    return this.http.post<IContacto>(`${this.baseUrl}/contacto`, data);
  }

  getContactos(): Observable<IContacto[]> {
    return this.http.get<IContacto[]>(`${this.baseUrl}/contacto`);
  }
}