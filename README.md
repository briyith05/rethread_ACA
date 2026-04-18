# ReThread - Filamento Reciclado Colombiano

Un sitio web moderno y responsivo que presenta **ReThread**, una solución innovadora de filamento reciclado de origen colombiano para impresión 3D.

## 📋 Descripción del Proyecto

ReThread es una plataforma web que promociona y comercializa filamento reciclado de alta calidad. El sitio ofrece información sobre los productos, el proceso de reciclaje, la empresa y un formulario de contacto para consultas y pedidos.

## 🌿 Características

- **Página de Inicio**: Presentación principal del proyecto y propuesta de valor
- **Nosotros**: Información sobre la empresa y su misión
- **Productos**: Catálogo de filamentos disponibles
- **Proceso**: Explicación del proceso de reciclaje y producción
- **Contacto**: Formulario para consultas y pedidos
- **Diseño Responsivo**: Interfaz optimizada para dispositivos móviles y de escritorio
- **Servidor Express**: Backend ligero para servir archivos estáticos

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3
- **Backend**: Node.js con Express.js
- **Versión**: 1.0.0

## ✅ Recomendación Antes de Instalar

Se recomienda tener **Node.js** instalado (versión 18 o superior) para ejecutar correctamente este proyecto.

Descarga Node.js desde el sitio oficial: [https://nodejs.org/es/download](https://nodejs.org/es/download)

Puedes verificar si ya lo tienes con:

```bash
node -v
npm -v
```

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/briyith05/rethread_ACA.git
cd rethread_sitio_web
```

2. Instala las dependencias:
```bash
npm install
```

## 🚀 Uso

Para iniciar el servidor de desarrollo:

```bash
npm start
```

O en modo desarrollo:
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
rethread_sitio_web/
├── index.html          # Página de inicio
├── nosotros.html       # Información sobre la empresa
├── productos.html      # Catálogo de productos
├── proceso.html        # Proceso de producción
├── contacto.html       # Formulario de contacto
├── styles.css          # Estilos globales
├── server.js           # Servidor Express
├── package.json        # Dependencias del proyecto
└── README.md           # Este archivo
```

## 📝 Rutas Disponibles

- `GET /` - Página de inicio
- `GET /index` - Página de inicio (alternativa)
- `GET /nosotros` - Acerca de ReThread
- `GET /productos` - Catálogo de productos
- `GET /proceso` - Proceso de reciclaje
- `GET /contacto` - Formulario de contacto

## 💚 Compromiso Ambiental

ReThread busca reducir el impacto ambiental de la industria de impresión 3D mediante el reciclaje y reutilización de filamento plástico, promoviendo una economía circular en Colombia.

## 📧 Contacto

Para más información o consultas, completa el formulario de contacto en el sitio web.

---

**ReThread** - Imprimiendo un futuro más sostenible 🌍 
