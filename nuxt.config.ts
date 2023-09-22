// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  experimental: {
    payloadExtraction: true,
  },
  app: {
    head: {
      title: "Fidgrove",
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-HFHL1ZJCVF",
          async: true,
        },
        {
          src: "ts/ga.ts",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Improving sim racing performance through data. Cloud-based data analytics platform",
        },
        {
          name: "author",
          content: "Fidgrove",
        },
        {
          name: "og:description",
          content:
            "Improving sim racing performance through data. Cloud-based data analytics platform",
        },
        {
          name: "og:title",
          content: "Fidgrove",
        },
        {
          name: "og:site_name",
          content: "Fidgrove",
        },
        {
          property: "og:image",
          content: "/img/logo_meta.png",
        },
        {
          property: "twitter:image",
          content: "/img/logo_meta.png",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      appUrl: process.env.NUXT_ENV_API_URL || "http://localhost:3000",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/svg-sprite", "floating-vue/nuxt"],
  css: ["@/assets/scss/main.scss"],
  router: {
    options: {
      linkActiveClass: "is-active",
      linkExactActiveClass: "is-active",
    },
  },
});
