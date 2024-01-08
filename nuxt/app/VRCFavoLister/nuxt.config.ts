import vuetify from "vite-plugin-vuetify";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
  modules: ["@nuxtjs/robots", "@vee-validate/nuxt"],
  robots: {
    UserAgent: "*",
    Disallow: "",
  },
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
