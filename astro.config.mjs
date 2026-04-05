// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	// Obligatorio para que los assets (CSS/JS) carguen en GitHub Pages
	site: 'https://giacca90.github.io',
	base: '/textil',

	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'ca', 'en', 'fr'],
		routing: {
			prefixDefaultLocale: false,
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},

	trailingSlash: 'always',
	build: {
		format: 'directory', // Fuerza la estructura de carpetas /index.html
	},
});
