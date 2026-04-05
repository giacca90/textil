// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://giacca90.github.io',
	base: '/textil',
	trailingSlash: 'always',

	// Cambiamos el nombre de la carpeta de salida de '_astro' a 'assets'
	// para evitar que GitHub Pages/Jekyll la ignoren.
	build: {
		assets: 'assets',
	},

	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'ca', 'en', 'fr'],
		routing: {prefixDefaultLocale: false},
	},
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssCodeSplit: false,
		},
	},
});
