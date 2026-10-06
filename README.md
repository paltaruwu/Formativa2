# Portafolio Personal y Pruebas Unitarias - Jennifer Lawrence

Proyecto desarrollado para la **Evaluación Formativa N° 2** de la asignatura **Desarrollo Fullstack II (DSY1104)** - Duoc UC.

Este proyecto consiste en un portafolio web moderno, responsivo y dinámico construido con **React** y **Vite**, estilizado con **Bootstrap 5**, que integra lectura de datos dinámicos desde archivos **JSON** y un plan de **pruebas unitarias** automatizadas utilizando **Jasmine** y **Karma**.

---

## 🚀 Tecnologías Utilizadas

- **Frontend Core**: React 19, HTML5, JavaScript ES6+
- **Build Tool**: Vite
- **Estilos y Maquetación**: Bootstrap 5, CSS3, Flexbox & Grid System
- **Testing Framework**: Jasmine, Karma, React Testing Library
- **Linter & Calidad de Código**: Oxlint

---

## 📁 Estructura del Proyecto

```text
jennifer-lawrence-portfolio/
├── public/                  # Archivos estáticos públicos
├── src/
│   ├── assets/              # Imágenes y recursos estáticos
│   ├── components/          # Componentes React reutilizables
│   │   ├── ContactForm.jsx       # Formulario de contacto con Bootstrap
│   │   ├── ContactForm.test.jsx  # Pruebas de eventos y DOM
│   │   ├── Introduction.jsx      # Perfil principal ("Sobre Mí")
│   │   ├── Introduction.test.jsx # Pruebas unitarias de perfil
│   │   ├── Navbar.jsx            # Navegación responsiva
│   │   ├── Navbar.test.jsx       # Pruebas unitarias de navegación
│   │   ├── ProjectCard.jsx       # Tarjetas de proyectos cinematográficos
│   │   └── ProjectCard.test.jsx  # Pruebas unitarias de tarjetas
│   ├── data/                # Archivos de datos JSON dinámicos
│   │   ├── news.json        # Noticias recientes
│   │   └── projects.json    # Lista de proyectos/películas
│   ├── App.jsx              # Componente principal de la aplicación
│   ├── index.css            # Estilos globales
│   └── main.jsx             # Punto de entrada de React
├── karma.conf.js            # Configuración de pruebas unitarias con Karma
├── package.json             # Dependencias y scripts del proyecto
└── README.md                # Documentación del proyecto
```

---

## ⚙️ Instalación y Ejecución

### Prerrequisitos
Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

### 1. Clonar e Instalar Dependencias
```bash
git clone <URL_DE_TU_REPOSITORIO>
cd jennifer-lawrence-portfolio
npm install
```

### 2. Ejecutar el Servidor de Desarrollo
```bash
npm run dev
```
Abre la URL indicada en la terminal (por defecto `http://localhost:5173`) para visualizar el portafolio en tu navegador.

---

## 🧪 Plan de Pruebas Unitarias (Jasmine + Karma)

El proyecto incluye un plan de pruebas automatizadas que cubre los componentes críticos del sistema (`IL2.2` y `IL2.3`), evaluando el renderizado en el DOM, el paso de propiedades (`props`), el manejo de estado (`state`) y los eventos de usuario.

### Casos de Prueba Implementados:
1. **`Introduction.test.jsx`**:
   - Valida la correcta renderización del nombre del estudiante/personaje y biografía.
   - Verifica la presencia del atributo de accesibilidad `alt` en la foto de perfil.
   - Valida que los botones de enlaces externos a IMDb y Wikipedia posean sus URLs correctas.

2. **`Navbar.test.jsx`**:
   - Verifica la renderización de la marca principal y todos los enlaces de la barra de navegación.
   - Comprueba que los atributos `href` apunten correctamente a sus respectivas anclas de sección (`#intro`, `#projects`, `#news`, `#contact`).

3. **`ProjectCard.test.jsx`**:
   - Valida que la tarjeta reciba y muestre dinámicamente las propiedades (`props`) de la película (título, descripción, categorías).
   - Verifica la presencia del botón de enlace hacia los detalles en IMDb.

4. **`ContactForm.test.jsx`**:
   - Evalúa la renderización completa de los campos del formulario (`Form` de Bootstrap).
   - Simula la interacción del usuario cambiando valores en los campos de entrada mediante `fireEvent.change`.
   - Simula el evento de envío del formulario (`fireEvent.click` / `submit`) y valida en el DOM la aparición de la alerta de confirmación (`success-alert`).

### Ejecución de Pruebas Unitarias
Para ejecutar la suite de pruebas unitarias:
```bash
npm test
```
o ejecutarlas en modo ejecutor único:
```bash
npx karma start --single-run
```

---

## 📦 Control de Versiones y Despliegue (GitHub Pages)

### Comandos de Git para Historial de Commits:
```bash
git init
git add .
git commit -m "feat: implementa componentes responsivos, carga JSON y pruebas unitarias con Karma"
git branch -M main
git remote add origin <URL_DE_TU_REPOSITORIO_GITHUB>
git push -u origin main
```

### Publicación en GitHub Pages:
Para publicar el proyecto en GitHub Pages:
1. Configurar la propiedad `base` en `vite.config.js` con el nombre de tu repositorio:
   ```javascript
   export default defineConfig({
     base: '/jennifer-lawrence-portfolio/',
     plugins: [react()]
   })
   ```
2. Ejecutar la compilación de producción:
   ```bash
   npm run build
   ```
3. Subir la carpeta `dist` a la rama `gh-pages` o mediante la opción de GitHub Actions en la pestaña **Settings > Pages** de tu repositorio.

---

## ♿ Accesibilidad y Rendimiento

- **Accesibilidad (a11y)**: Se incluyen etiquetas `alt` en todas las imágenes y etiquetas `<label>` vinculadas mediante `htmlFor` a cada campo de entrada del formulario.
- **Rendimiento**: Carga diferida de imágenes y minimización de paquetes gracias al empaquetador Vite.
