// @ts-check
import { defineConfig } from 'astro/config';

// Deploy target is set by environment so the same code serves every host:
//   GitHub Pages:  SITE_URL=https://darudewayanto.github.io  BASE_PATH=/coach-daru
//   Final domain:  SITE_URL=https://darudewayanto.com (BASE_PATH unset → "/")
// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://darudewayanto.com',
  base: process.env.BASE_PATH ?? '/',
  devToolbar: { enabled: false },
});
