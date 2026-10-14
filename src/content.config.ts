import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['Completed', 'In development', 'Research']),
    year: z.number(),
    featured: z.boolean().default(false),
    disciplines: z.array(z.string()),
    order: z.number().default(99),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    category: z.enum(['technical', 'research', 'academic', 'concept']),
    status: z.string(),
    origin: z.string(),
    authors: z.string(),
    order: z.number().default(99),
    pdf: z.string().startsWith('/publications/').optional(),
    disclaimer: z.string(),
  }),
});

export const collections = { projects, publications };
