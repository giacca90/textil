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
      // 1. Extraemos el valor de la columna 'imagen' y quitamos espacios
      const imagenCsv = record.imagen ? String(record.imagen).trim() : "";
      
      let fotoFinal;

      // 2. Comprobación: ¿Está la columna vacía?
      if (imagenCsv !== "") {
        // Si hay algo escrito (una URL o ruta local), lo usamos
        fotoFinal = imagenCsv;
      } else {
        // SI ESTÁ VACÍA, usamos tu lógica de búsqueda que tanto te gusta:
        const query = encodeURIComponent(`${record.nombre} textile texture`);
        
        // Esta es la URL de LoremFlickr que comentaste que mejor te funciona
        fotoFinal = `https://loremflickr.com/800/600/fabric,textile/all?lock=${index}`;
      }

      return {
        id: String(index),
        ...record,
        imagen: fotoFinal, 
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