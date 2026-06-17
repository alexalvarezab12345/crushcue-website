import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'fs';
import { resolve } from 'path';

// Read MDX frontmatter at config time to determine which SEO pages are published.
// Runs in Node.js before Vite — no content collection API available here.
// When status changes to "published" in any MDX file, the sitemap updates automatically.
function getPublishedSlugs() {
  const dir = resolve('./src/content/seo');
  try {
    return new Set(
      readdirSync(dir)
        .filter(f => f.endsWith('.mdx'))
        .filter(f => /^status:\s*"published"/m.test(readFileSync(resolve(dir, f), 'utf8')))
        .map(f => f.replace('.mdx', ''))
    );
  } catch {
    return new Set();
  }
}

const publishedSlugs = getPublishedSlugs();

export default defineConfig({
  site: 'https://crushcue.app',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '');
        // Always include static pages
        if (['', '/privacy', '/terms', '/support'].includes(path)) return true;
        // Include SEO pages only when status is published
        return publishedSlugs.has(path.replace(/^\//, ''));
      },
    }),
  ],
  output: 'static',
});
