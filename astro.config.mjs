// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// 1. Configuración de Idiomas
	i18n: {
		defaultLocale: 'es', // El español manda
		locales: ['es', 'ca', 'en', 'fr'],
		routing: {
			// 'false' hace que el idioma por defecto (es) NO tenga prefijo /es/
			// Así la raíz '/' será directamente el contenido de es.csv
			prefixDefaultLocale: false,
		},
	},

	// 2. Configuración de Vite y Tailwind
	vite: {
		plugins: [tailwindcss()],
	},
});
