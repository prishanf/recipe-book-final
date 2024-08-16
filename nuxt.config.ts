// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    sfUserName: process.env.SF_USER || "SF user name",
    sfPassword: process.env.SF_PASSWORD || "SF password",
  }
})
