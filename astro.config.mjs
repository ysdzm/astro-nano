import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://dokudamibox.net",
  base: "/dokudamibox.net-2/",
  integrations: [mdx(), sitemap(), tailwind()],
});
