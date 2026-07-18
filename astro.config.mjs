// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://cpalau.com",
	trailingSlash: "always",

	// Cambiamos el nombre de la carpeta de salida de '_astro' a 'assets'
	// para evitar que GitHub Pages/Jekyll la ignoren.
	build: {
		assets: "assets",
	},

	i18n: {
		defaultLocale: "es",
		locales: ["es", "ca", "en", "fr"],
		routing: { prefixDefaultLocale: false },
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "hover",
	},
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssCodeSplit: false,
		},
	},
});
