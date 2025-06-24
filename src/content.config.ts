import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const jobs = defineCollection({
  loader: glob({
    base: "./src/content/jobs",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    istitution: z.string(),
    place: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    logo: z.string().optional(),
  }),
});

const education = defineCollection({
  loader: glob({
    base: "./src/content/education",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    istitution: z.string(),
    place: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    logo: z.string().optional(),
  }),
});

export const collections = { projects, jobs, education };
