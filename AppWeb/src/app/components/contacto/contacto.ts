import { Component } from '@angular/core';
import { Api } from '../../services/api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {IContacto } from '../../interfaces/contacto';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  contacto: IContacto  = {
    nombre: '',
    email: '',
    motivo: '',
    mensaje: '',
    fecha: undefined, // opcional, lo genera el backend
  };

  constructor(private api: Api) {}

  enviar() {
    try {
      console.log('📨 Enviando datos:', this.contacto);

      // Validaciones 
      if (!this.contacto.nombre || !this.contacto.email || !this.contacto.motivo || !this.contacto.mensaje) {
        throw new Error('Todos los campos son obligatorios');
      }

      if (!this.contacto.email.includes('@')) {
        throw new Error('Email inválido');
      }

      // Llamada al servicio con manejo de error
      this.api.postContacto(this.contacto).subscribe({
        next: () => {
          alert('✅ Mensaje enviado correctamente');
          // Reinicia el formulario
          this.contacto = { nombre: '', email: '', motivo: '', mensaje: '', fecha: undefined };
        },
        error: (err) => {
          console.error('❌ Error en la API:', err);
          alert('Hubo un problema al enviar el mensaje');
        }
      });

    } catch (error: any) {
      console.error('❌ Error al enviar formulario:', error.message);
      alert(error.message);
    }
  }
}