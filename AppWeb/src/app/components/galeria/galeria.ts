import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria {
  ngOnInit() {
    try {
      console.log('✅ Galeria cargando...');
      this.cargarImagenes();
    } catch (error) {
      console.error('❌ Error al cargar Galeria:', error);
    }
  }

  cargarImagenes() {
    throw new Error('No se pudieron cargar las imágenes');
  }
}
