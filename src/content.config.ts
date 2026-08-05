import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sharedFields = {
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  image: z.string().optional(),
  author: z.string().optional(),
};

const researchCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    ...sharedFields,
    status: z.enum(['Planning', 'Active', 'Completed']).default('Active'),
    partner: z.string().optional(),
  }),
});

const profileCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/profiles' }),
  schema: z.object({
    ...sharedFields,
    category: z.enum(['Aircraft', 'Technology']).default('Technology'),
    platform: z.string().optional(),
  }),
});

const publicationCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    ...sharedFields,
    publisher: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const presentationCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/presentations' }),
  schema: z.object({
    ...sharedFields,
    venue: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const newsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    ...sharedFields,
    category: z.enum(['Project Update', 'News', 'Milestone']).default('Project Update'),
  }),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string().optional(),
    email: z.string().email().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  research: researchCollection,
  profiles: profileCollection,
  publications: publicationCollection,
  presentations: presentationCollection,
  news: newsCollection,
  team: teamCollection,
};
