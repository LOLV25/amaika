import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Galeria } from './components/galeria/galeria';
import { Resenas } from './components/resenas/resenas';
import { Blog } from './components/blog/blog';
import { Contacto } from './components/contacto/contacto';

export const routes: Routes = [
    { path: '', component: Home },
    {path: 'galeriasFotos', component: Galeria},
    { path: 'resenas', component: Resenas },
    { path: 'blog', component: Blog },
    { path: 'contacto', component: Contacto },

    //       
    { path: '**', redirectTo: '' }
];
