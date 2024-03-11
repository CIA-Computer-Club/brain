import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import remarkMath from 'remark-math';
import remarkWikiLink from "remark-wiki-link";
import remarkBreaks from "remark-breaks";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeCheckbox } from "./src/lib/rehype-checkbox.mjs";
import { remarkObsidianImg } from "./src/lib/remark-obsidian-image.mjs";
import { rehypeHashtags } from "./src/lib/rehype-hashtags.mjs";
import { remarkDescription } from "./src/lib/remark-description.mjs";
import rehypeMathjax from 'rehype-mathjax';
import vercel from "@astrojs/vercel/static";

/** @type {import('rehype-pretty-code').Options} */
import compress from "astro-compress";
const rehypePrettyCodeOptions = {
  theme: {
    dark: "rose-pine",
    light: "rose-pine-dawn",
  },
  keepBackground: false,
};

// https://astro.build/config
export default defineConfig({
  site: "https://localhost",
  compressHTML: true,
  srcDir: "src",
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  markdown: {
    gfm: true,
    syntaxHighlight: false,
    smartypants: true,
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeCheckbox,
      rehypeHashtags,
      rehypeMathjax,
    ],
    remarkPlugins: [
      remarkObsidianImg,
      [
        remarkWikiLink,
        {
          hrefTemplate: (permalink) => "/" + permalink,
          aliasDivider: "|",
          pageResolver: (name) => [name.replace(/ /g, "-").toLowerCase()],
        },
      ],
      remarkBreaks,
      remarkReadingTime,
      remarkDescription,
      remarkMath,
    ],
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    icon(),
    compress({ CSS: true, HTML: true, JavaScript: true, SVG: true }),
  ],
});
