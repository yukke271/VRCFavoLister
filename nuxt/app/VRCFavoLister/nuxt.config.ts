import vuetify from "vite-plugin-vuetify";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8", // default <meta charset="utf-8">
      viewport: "width=device-width, initial-scale=1", // default <meta name="viewport" content="width=device-width, initial-scale=1">
      title: null, // default <title>VRChat Favo Lister</title>
      meta: [
        // <meta name="description" content="My amazing site.">
        { name: "description", content: "My amazing site." },
      ],
    },
  },
  runtimeConfig: {
    public: {
      phase: "release",
    },
  },
  imports: {
    autoImport: true,
  },
  devtools: { enabled: true },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins!.push(vuetify());
    },
  },
  modules: ["@vee-validate/nuxt"],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
});
