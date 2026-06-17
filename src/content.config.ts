import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seo = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/seo' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    slug: z.string(),
    primaryKeyword: z.string().optional(),
    clusterKey: z.string().optional(),
    briefId: z.string().optional(),
    opportunityId: z.string().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
    generatedAt: z.string().optional(),
    publishedDate: z.string().optional(),
    ctaPrelude: z.string().optional(),
    conversationExample: z.array(z.object({
      sender: z.enum(['you', 'them']),
      text: z.string(),
    })).optional(),
    analysisCard: z.object({
      signal: z.string(),
      confidence: z.enum(['high', 'medium', 'low']),
      insight: z.string(),
      recommendation: z.string(),
    }).optional(),
    scenarioCards: z.array(z.object({
      label: z.string(),
      description: z.string(),
    })).optional(),
    relatedSlugs: z.array(z.string()).optional(),
    socialProofNote: z.string().optional(),
  }),
});

export const collections = { seo };
