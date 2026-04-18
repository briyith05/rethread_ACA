const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Rutas para las páginas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/nosotros', (req, res) => {
  res.sendFile(path.join(__dirname, 'nosotros.html'));
});

app.get('/productos', (req, res) => {
  res.sendFile(path.join(__dirname, 'productos.html'));
});

app.get('/proceso', (req, res) => {
  res.sendFile(path.join(__dirname, 'proceso.html'));
});

app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, 'contacto.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ReThread ejecutándose en http://localhost:${PORT}`);
});
