import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: ['javascript'],
      wrap: true,
    }
  }
});