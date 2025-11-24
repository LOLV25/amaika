const Reseña = require('../models/Reseña');

// Obtener todas las reseñas
async function getReseñas(req, res) {
  try {
    const reseñas = await Reseña.findAll({ order: [['fecha', 'DESC']] });
    res.json(reseñas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener reseñas' });
  }
}

// Crear una nueva reseña
async function postReseña(req, res) {
  const { nombre, email, comentario, rating } = req.body;
  if (!nombre || !email || !comentario || !rating) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    const nueva = await Reseña.create({ nombre, email, comentario, rating, fecha: new Date() });
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar reseña' });
  }
}

// Eliminar reseña
async function deleteReseña(req, res) {
  const { id } = req.params;
  try {
    const reseña = await Reseña.findByPk(id);
    if (!reseña) return res.status(404).json({ error: 'Reseña no encontrada' });

    await reseña.destroy();
    res.json({ ok: true, mensaje: 'Reseña eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar reseña' });
  }
}

module.exports = { getReseñas, postReseña, deleteReseña };
