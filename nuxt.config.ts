// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "Fidgrove",
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
