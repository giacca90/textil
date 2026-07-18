---

| | | GGGGGG IIII AAA CCCCCC CCCCCC AAA 9999999 00000 | | GG GG II AA AA CC CC CC CC AA AA 99 99 00 00 | | GG II AA AA CC CC AA AA 99 99 00 00 | | GG GGGG II AA AA CC CC AA AA 99999999 00 00 | | GG GG II AAAAAAAAA CC CC AAAAAAAAA 99 00 00 | | GG GG II AA AA CC CC CC CC AA AA 99 99 00 00 | | GGGGGG IIII AA AA CCCCCC CCCCCC AA AA 9999999 00000 | |****************************************\_****************************************|

<p align="center">
  <img src="https://img.shields.io/github/stars/giacca90/textil?style=for-the-badge&logo=github&color=gold" alt="Stars">
  <img src="https://img.shields.io/github/forks/giacca90/textil?style=for-the-badge&logo=github&color=blue" alt="Forks">
  <img src="https://img.shields.io/github/issues/giacca90/textil?style=for-the-badge&logo=github&color=red" alt="Issues">
  <img src="https://img.shields.io/github/license/giacca90/textil?style=for-the-badge&logo=github&color=green" alt="License">
</p>

## 1. Descripción General / General Description / Descrizione Generale

Este proyecto es la plataforma web corporativa y catálogo interactivo de **C. PALAU SA**, un distribuidor y mayorista textil de referencia ubicado en Barcelona. Diseñado para ofrecer una navegación ultrarrápida, una experiencia de usuario moderna y soporte multilingüe completo, este sitio sirve como catálogo digital para que los profesionales del sector puedan explorar colecciones y tejidos de alta calidad.

<p style="color: gray; margin: 0;">This project is the corporate web platform and interactive catalog for **C. PALAU SA**, a leading textile distributor and wholesaler based in Barcelona. Designed to offer ultra-fast navigation, a modern user experience, and comprehensive multilingual support, this site acts as a digital catalog for industry professionals to explore collections and high-quality fabrics.</p>
<p style="color: gray; margin: 0;">Questo progetto è la piattaforma web aziendale e il catalogo interattivo di **C. PALAU SA**, un distributore e grossista tessile di riferimento con sede a Barcellona. Progettato per offrire una navigazione ultraveloce, un'esperienza utente moderna e un supporto multilingue completo, questo sito funge da catalogo digitale per i professionisti del settore per esplorare collezioni e tessuti di alta qualità.</p>

---

## 2. Características Principales / Key Features / Caratteristiche Principali

- **Arquitectura Multilingüe**: Soporte nativo para Español, Catalán, Inglés y Francés con enrutamiento dinámico adaptado e indexación SEO óptima. <span style="color: gray;"> — **Multilingual Architecture**: Native support for Spanish, Catalan, English, and French with tailored dynamic routing and optimal SEO indexing.</span> <span style="color: gray;"> — **Architettura Multilingue**: Supporto nativo per spagnolo, catalano, inglese e francese con routing dinamico personalizzato e indicizzazione SEO ottimale.</span>

- **Rendimiento Extremo**: Generación estática completa y uso del enrutador SPA nativo de Astro (View Transitions) para transiciones fluidas e instantáneas sin recargas de página. <span style="color: gray;"> — **Extreme Performance**: Full static generation and utilization of Astro's native SPA router (View Transitions) for fluid, instantaneous transitions without page reloads.</span> <span style="color: gray;"> — **Prestazioni Estreme**: Generazione statica completa e utilizzo del router SPA nativo di Astro (View Transitions) per transizioni fluide e istantanee senza ricaricare la pagina.</span>

- **Diseño Moderno y Adaptativo**: Interfaz limpia, accesible y totalmente responsive desarrollada con Tailwind CSS v4. <span style="color: gray;"> — **Modern and Adaptive Design**: Clean, accessible, and fully responsive interface built with Tailwind CSS v4.</span> <span style="color: gray;"> — **Design Moderno e Adattivo**: Interfaccia pulita, accessibile e completamente responsive sviluppata con Tailwind CSS v4.</span>

- **Soporte de Carga Offline (PWA)**: Integrado con un Service Worker que permite el almacenamiento en caché de los recursos y el funcionamiento offline básico. <span style="color: gray;"> — **Offline Loading Support (PWA)**: Integrated with a Service Worker that enables resource caching and basic offline functionality.</span> <span style="color: gray;"> — **Supporto al Caricamento Offline (PWA)**: Integrato con un Service Worker che consente il caching delle risorse e il funzionamento offline di base.</span>

---

## 3. Tecnologías Empleadas / Tech Stack / Tecnologie Utilizzate

| Tecnología / Tech   | Propósito / Purpose | Descripción / Description                                                                                                                                                                                                                                                         |
| :------------------ | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Astro 5**         | Framework Principal | Generación de sitios estáticos veloces con hidratación parcial y View Transitions nativas. <span style="color: gray;"><br>— Fast static site generation framework with partial hydration. <br>— Framework di generazione di siti statici veloci con idratazione parziale.</span>  |
| **Tailwind CSS v4** | Diseño y Estilos    | Framework CSS utilitario para un diseño moderno, flexible y responsivo. <span style="color: gray;"><br>— Utility-first CSS framework for modern, responsive layouts. <br>— Framework CSS di tipo utility-first per layout moderni e responsive.</span>                            |
| **Vite**            | Empaquetador        | Herramienta de construcción ultrarrápida que optimiza recursos, CSS y scripts. <span style="color: gray;"><br>— Ultra-fast build tool optimizing resources, CSS, and scripts. <br>— Strumento di build ultraveloce che ottimizza risorse, CSS e script.</span>                    |
| **TypeScript**      | Lenguaje            | Tipado estático robusto para asegurar la calidad y mantenibilidad del código. <span style="color: gray;"><br>— Strong static typing ensuring code quality and maintainability. <br>— Tipizzazione statica robusta per garantire la qualità e la manutenibilità del codice.</span> |

---

## 4. Estructura del Proyecto / Project Structure / Struttura del Progetto

```text
.
├── public/                 # Recursos estáticos / Static assets / Risorse statiche
│   ├── robots.txt          # Configuración para motores de búsqueda / SEO configuration
│   └── sw.js               # Service Worker para carga offline / Service worker for offline use
├── src/                    # Código fuente de la aplicación / Application source code
│   ├── content/            # Datos estructurados de traducción (.csv) / Structured translations
│   │   ├── ca.csv
│   │   ├── en.csv
│   │   ├── es.csv
│   │   └── fr.csv
│   ├── content.config.ts   # Configuración de Content Collections / Content Collections config
│   ├── pages/              # Páginas de la web con enrutamiento dinámico / Dynamic routing pages
│   │   └── [...lang]/
│   │       ├── index.astro
│   │       ├── index.json
│   │       ├── nosotros.astro
│   │       ├── nosotros.json
│   │       └── articulo/
│   │           ├── [id].astro
│   │           └── id.json
│   └── styles/             # Hojas de estilo y Tailwind / Global styles and Tailwind
│       └── global.css
├── astro.config.mjs        # Configuración del ecosistema Astro / Astro ecosystem configuration
├── package.json            # Scripts del proyecto y dependencias / Project scripts & dependencies
└── tsconfig.json           # Ajustes del compilador de TypeScript / TypeScript configuration
```

---

## 5. Requisitos Previos / Prerequisites / Requisiti Previsti

Antes de iniciar el entorno de desarrollo, asegúrate de tener instalado:

<p style="color: gray; margin: 0;">Before starting the development environment, make sure you have installed:</p>
<p style="color: gray; margin: 0;">Prima di avviare l'ambiente di sviluppo, assicurati di aver installato:</p>

- **Node.js**: `>= 22.12.0` (Recomendado/Recommended)
- **npm**: Administrador de paquetes de Node.js / Node.js package manager / Gestore di pacchetti Node.js

---

## 6. Configuración y Variables / Configuration & Variables / Configurazione e Variabili

Este proyecto no requiere variables de entorno complejas ni bases de datos para su funcionamiento local. Las rutas y recursos se autoconfiguran utilizando los entornos estándares de Astro (`import.meta.env.BASE_URL`), lo cual facilita enormemente el despliegue directo.

<p style="color: gray; margin: 0;">This project does not require complex environment variables or databases for local operation. Routes and assets are self-configured using Astro's standard environments (`import.meta.env.BASE_URL`), greatly facilitating direct deployment.</p>
<p style="color: gray; margin: 0;">Questo progetto non richiede variabili d'ambiente complesse o database per il funzionamento locale. Le rotte e le risorse si autoconfigurano utilizzando gli ambienti standard di Astro (`import.meta.env.BASE_URL`), facilitando notevolmente il deployment diretto.</p>

---

## 7. Despliegue / Deployment / Deployment

### Desarrollo Local / Local Development / Sviluppo Locale

Para iniciar un servidor de desarrollo local con recarga en vivo (hot reload):

<p style="color: gray; margin: 0;">To start a local development server with hot reload:</p>
<p style="color: gray; margin: 0;">Per avviare un server di sviluppo locale con ricarica automatica:</p>

```bash
# 1. Instalar dependencias / Install dependencies
npm install

# 2. Iniciar el servidor / Start the server
npm run dev
```

El servidor se levantará por defecto en `http://localhost:4321`.

### Compilación y Producción / Build & Production / Build e Produzione

Para realizar una compilación optimizada lista para producción:

<p style="color: gray; margin: 0;">To generate an optimized build ready for production:</p>
<p style="color: gray; margin: 0;">Per generare una build ottimizzata pronta per la produzione:</p>

```bash
npm run build
```

### Despliegue Automático en GitHub Pages / Auto Deploy / Deployment Automatico

El proyecto incluye un pipeline configurado para publicar automáticamente la build en la rama `gh-pages` de tu repositorio:

<p style="color: gray; margin: 0;">The project includes a pre-configured utility to automatically publish the build to your repository's `gh-pages` branch:</p>
<p style="color: gray; margin: 0;">Il progetto include un'utilità preconfigurata per pubblicare automaticamente la build sul ramo `gh-pages` del tuo repository:</p>

```bash
npm run deploy
```

---

## 8. Instrucciones de Uso / Usage / Istruzioni per l'Uso

Al abrir el sitio en el navegador, serás redirigido automáticamente a la versión del idioma detectado o al idioma por defecto (Español).

<p style="color: gray; margin: 0;">When opening the site in the browser, you will be automatically redirected to the detected language version or the default language (Spanish).</p>
<p style="color: gray; margin: 0;">Aprendo il sito nel browser, sarai reindirizzato automaticamente alla versione della lingua rilevata o alla lingua predefinita (Spagnolo).</p>

- **Selector de Idioma**: Permite conmutar instantáneamente entre Castellano, Catalán, Inglés y Francés. <span style="color: gray;"> — **Language Selector**: Allows instant switching between Spanish, Catalan, English, and French.</span> <span style="color: gray;"> — **Selettore di Lingua**: Consente il passaggio istantaneo tra spagnolo, catalano, inglese e francese.</span>

- **Catálogo Interactivo**: Los artículos y tejidos se cargan dinámicamente desde colecciones CSV locales de alto rendimiento. <span style="color: gray;"> — **Interactive Catalog**: Articles and fabrics are loaded dynamically from high-performance local CSV collections.</span> <span style="color: gray;"> — **Catalogo Interattivo**: Gli articoli e i tessuti vengono caricati dinamicamente da collezioni CSV locali ad alte prestazioni.</span>

---

## 9. Contribución / Contributing / Contributo

¡Las contribuciones son bienvenidas! Si deseas mejorar las traducciones, añadir nuevas características o reportar un error:

<p style="color: gray; margin: 0;">Contributions are welcome! If you want to improve translations, add new features, or report a bug:</p>
<p style="color: gray; margin: 0;">I contributi sono benvenuti! Se desideri migliorare le traduzioni, aggiungere nuove funzionalità o segnalare un bug:</p>

1. Haz un Fork del repositorio.
2. Crea una rama para tu característica (`git checkout -b feature/nueva-mejora`).
3. Realiza tus cambios y haz commit respetando los estándares de formato.
4. Envía un Pull Request detallando tus cambios.

---

## 10. Licencia / License / Licenza

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

<p style="color: gray; margin: 0;">This project is licensed under the **MIT** License. See the [LICENSE](LICENSE) file for more details.</p>
<p style="color: gray; margin: 0;">Questo progetto è rilasciato sotto Licenza **MIT**. Consulta il file [LICENSE](LICENSE) per maggiori dettagli.</p>

---

## 11. Autores y Agradecimientos / Authors & Credits / Autori e Ringraziamenti

- **Giacca90** - Desarrollo principal y maquetación / Lead developer & layouts / Sviluppatore principale e layout.
- Correo / Email: `giacca90mobile@protonmail.com`
