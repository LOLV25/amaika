import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { sequelize, conectarABaseDeDatos } from '../config_DB/db.js';
import { getReseñas, postReseña, deleteReseña } from '../controllers/reseñasController.js';
import { getBlogs, postBlog, deleteBlog } from '../controllers/blogController.js';
import { getContactos, postContacto, deleteContacto } from '../controllers/contactoController.js';


dotenv.config();
const app = express();
app.use(cors({
  origin: 'http://localhost:4200', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Endpoints reseñas
app.get('/api/reseñas', getReseñas);
app.post('/api/reseñas', postReseña);
app.delete('/api/reseñas/:id', deleteReseña);

// Endpoints blog
app.get('/api/blog', getBlogs);
app.post('/api/blog', postBlog);
app.delete('/api/blog/:id', deleteBlog);

// Endpoints contacto
app.get('/api/contacto', getContactos);
app.post('/api/contacto', postContacto);
app.delete('/api/contacto/:id', deleteContacto);

// Endpoint raíz
app.get('/', (req, res) => res.send('Amaika API funcionando 🚀'));

// Conectar y levantar servidor
(async () => {
  await conectarABaseDeDatos();
  await sequelize.sync();
  app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
  });
})();
