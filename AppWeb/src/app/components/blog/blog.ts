import { Component, OnInit } from '@angular/core';
import { Api } from '../../services/api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IBlog } from '../../interfaces/Blog';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit {
  blogs: IBlog[] = [];
  nuevoBlog: IBlog = {
    titulo: '',
    slug: '',
    contenido: '',
    fecha_publicacion: undefined
  };

  constructor(private api: Api) {}

  ngOnInit() {
    this.cargarBlogs();
  }

  cargarBlogs() {
    this.api.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data;
      },
      error: (err) => {
        console.error('❌ Error al cargar blogs:', err);
      }
    });
  }

  enviarBlog() {
    try {
      if (!this.nuevoBlog.titulo || !this.nuevoBlog.slug || !this.nuevoBlog.contenido) {
        throw new Error('Todos los campos son obligatorios');
      }

      this.api.postBlog(this.nuevoBlog).subscribe({
        next: (res) => {
          alert('✅ Blog publicado correctamente');
          this.blogs.push(res);
          this.nuevoBlog = { titulo: '', slug: '', contenido: '', fecha_publicacion: undefined };
        },
        error: (err) => {
          console.error('❌ Error al publicar blog:', err);
          alert('Hubo un problema al publicar el blog');
        }
      });

    } catch (error: any) {
      console.error('❌ Error en validación:', error.message);
      alert(error.message);
    }
  }
}
