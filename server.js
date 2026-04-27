const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
// Puerto inicial configurable por variable de entorno.
const START_PORT = Number(process.env.PORT) || 3000;
// Si el puerto esta ocupado, intentamos automaticamente los siguientes 20.
const MAX_PORT = START_PORT + 20;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Rutas explicitas para cada vista principal.
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

// Crea el servidor HTTP y maneja colisiones de puerto.
function startServer(port) {
  const server = http.createServer(app);

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE' && port < MAX_PORT) {
      // Reintento automatico en el siguiente puerto disponible.
      startServer(port + 1);
      return;
    }

    console.error('No se pudo iniciar el servidor:', error.message);
    process.exit(1);
  });

  server.listen(port, () => {
    console.log(`🚀 Servidor ReThread ejecutándose en http://localhost:${port}`);
  });
}

// Punto de entrada del servidor.
startServer(START_PORT);
