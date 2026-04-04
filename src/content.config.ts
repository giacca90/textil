import {defineCollection} from 'astro:content';
import {z} from 'astro/zod';
import {parse} from 'csv-parse/sync';
import fs from 'node:fs';
import path from 'node:path';

interface CsvRow {
	nombre?: string;
	descripcion?: string;
	imagen?: string;
}

// Definimos la interfaz plana que Astro espera cuando se devuelve un array
interface ArticuloEntry {
	id: string;
	lang: string;
	index: number;
	nombre: string;
	descripcion: string;
	imagen: string;
}

export const collections = {
	articulos: defineCollection({
		loader: async (): Promise<ArticuloEntry[]> => {
			const allEntries: ArticuloEntry[] = [];
			const dataDir = path.join(process.cwd(), 'src', 'content');

			if (!fs.existsSync(dataDir)) return [];

			const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.csv'));

			const esPath = path.join(dataDir, 'es.csv');
			let esRecords: CsvRow[] = [];
			if (fs.existsSync(esPath)) {
				esRecords = parse(fs.readFileSync(esPath, 'utf-8'), {
					columns: true,
					skip_empty_lines: true,
					delimiter: ';',
					trim: true,
				}) as CsvRow[];
			}

			for (const file of files) {
				const lang = path.basename(file, '.csv');
				const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
				const rows = parse(content, {
					columns: true,
					skip_empty_lines: true,
					delimiter: ';',
					trim: true,
				}) as CsvRow[];

				rows.forEach((row, i) => {
					const fotoMaestra = esRecords[i]?.imagen?.trim() || '';
					const fotoActual = row.imagen?.trim() || '';
					const fotoFinal = fotoActual !== '' ? fotoActual : fotoMaestra !== '' ? fotoMaestra : `https://loremflickr.com/800/600/fabric,textile/all?lock=${i}`;

					// IMPORTANTE: Devolvemos los campos "planos".
					// Astro los envolverá en 'data' automáticamente basándose en el schema.
					allEntries.push({
						id: `${lang}-${i}`,
						lang: lang,
						index: i,
						nombre: row.nombre || 'Sin nombre',
						descripcion: row.descripcion || '',
						imagen: fotoFinal,
					});
				});
			}

			console.log(`✅ Loader: ${allEntries.length} entradas procesadas.`);
			return allEntries;
		},
		schema: z.object({
			lang: z.string(),
			index: z.number(),
			nombre: z.string(),
			descripcion: z.string(),
			imagen: z.string(),
		}),
	}),
};
