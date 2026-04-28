# ReThread - Filamento Reciclado Colombiano

Un sitio web moderno y responsivo que presenta **ReThread**, una solución innovadora de filamento reciclado de origen colombiano para impresión 3D.

## 📋 Descripción del Proyecto

ReThread es una plataforma web que promociona y comercializa filamento reciclado de alta calidad. El sitio ofrece información sobre los productos, el proceso de reciclaje, la empresa y un formulario de contacto para consultas y pedidos.

## 👀 Qué incluye al descargarlo

Al abrir el proyecto vas a ver un sitio web completo de una sola marca con:

- Inicio con hero principal animado y video de fondo
- Secciones de Nosotros, Productos, Proceso y Contacto
- Navegación superior fija en todas las páginas
- Imágenes y videos locales dentro de las carpetas `images/` y `Videos/`
- Servidor Express para abrir el sitio desde `http://localhost:3000`

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
cd rethread_ACA
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

## 🎬 Vista previa del sitio

La página principal muestra un hero visual con el mensaje de marca, un video de fondo suave y accesos directos a las secciones principales. Las demás páginas reutilizan la misma navegación y estilo para mantener una experiencia consistente.

## 🔄 Comandos de GitHub (Rama master)

Usa estos comandos desde la carpeta del proyecto:

```bash
cd C:\Users\Soporte.Tic\3D Objects\Fondo rojo\Pruebas\rethread_ACA
```

### 1) Subir cambios al repositorio en la rama master

```bash
git status
git checkout master
git add .
git commit -m "Tu mensaje de cambios"
git push origin master
```

### 2) Descargar lo más reciente de la rama master

```bash
git checkout master
git pull origin master
```

### 3) Clonar el repositorio y quedar en master

```bash
git clone https://github.com/briyith05/rethread_ACA.git
cd rethread_ACA
git checkout master
```

### 4) Verificar rama actual y remotos configurados

```bash
git branch --show-current
git remote -v
```

Nota: Si tu repositorio usa main en lugar de master, reemplaza master por main en los comandos anteriores.

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
