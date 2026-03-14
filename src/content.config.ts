import { defineCollection } from 'astro/content/config';
import { z } from 'astro/zod';
import { parse } from 'csv-parse/sync';
import fs from 'node:fs';
import path from 'node:path';

const articulos = defineCollection({
  loader: async () => {
    const filePath = path.resolve('./public/articulos.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      cast: true,
      delimiter: ';',
      trim: true, 
    });

    return records.map((record: any, index: number) => {
      // 1. Usamos una búsqueda de Unsplash moderna. 
      // El truco es usar la URL de búsqueda de imágenes de alta calidad.
      // Añadimos 'textile' y 'texture' para asegurar que salgan telas.
      const query = encodeURIComponent(`${record.nombre} textile texture`);
      
      // Usamos una URL de Unsplash que permite búsqueda por palabras clave
      // El parámetro 'sig' con el index evita que se repitan las fotos.
      const fotoDinamica = `https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=800&q=80&sig=${index}&search=${query}`;
      
      // ALTERNATIVA SI LA ANTERIOR NO TE GUSTA (Fotos de telas muy variadas):
      const fotoAlternativa = `https://loremflickr.com/800/600/fabric,textile/all?lock=${index}`;

      return {
        id: String(index),
        ...record,
        imagen: fotoAlternativa, // He puesto loremflickr con 'lock' porque es el más estable ahora mismo
      };
    });
  },
  schema: z.object({
    id: z.string(),
    nombre: z.string(),
    descripcion: z.string().optional(),
    imagen: z.string(),
  }),
});

export const collections = { articulos };