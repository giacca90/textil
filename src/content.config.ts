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

    return records.map((record: any, index: number) => ({
      // Como tu CSV no tiene columna 'id', usamos el índice como ID único
      id: String(index),
      ...record,
    }));
  },
  schema: z.object({
    id: z.string(),
    nombre: z.string(), // Antes decía 'titulo', por eso fallaba
    descripcion: z.string().optional(), // Lo ponemos opcional por si hay filas vacías
  }),
});

export const collections = { articulos };