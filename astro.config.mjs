import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ysdzm.github.io/dokudamibox.net-2/",
  base: '/dokudamibox.net-2/',  // ベースパスを設定
  integrations: [mdx(), sitemap(), tailwind()],
});
