import colors from "vuetify/es5/util/colors";
import { fa } from "vuetify/src/locale";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - refactor",
    title: "refactor",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/scss/vuetify.scss",
    "@/assets/scss/tinymce.scss",
    "@/assets/scss/styles.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    rtl: true,
    lang: {
      current: "fa",
      locales: { fa },
      // t: undefined as any,
    },
    options: {
      breakpoint: { scrollbarWidth: 2 },
      themeCache: {
        get: (key) => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
        max: 10,
        maxAge: 1000 * 60 * 60,
      },
    },
    customVariables: ["~/assets/scss/variables.scss"],
    theme: {
      dark: false,
      default: "light",
      disable: false,
      themes: {
        light: {
          primary: "#003974",
          secondary: "#A7A8A9",
          warning: "#FEC233",
          error: "#F51F1F",
          success: "#32BE93",
          info: "#2196F3",
          accent: "#82B1FF",
          // link
          anchor: "#003974",
          // colors
          blue: "#003974",
          grey: "#A7A8A9",
          gray: "#D0D0CE",
          yellow: "#FEC233",
          red: "#F51F1F",
          green: "#32BE93",
        },
        dark: {
          // primary: colors.blue.darken2,
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3,
          primary: "#0066d0",
          secondary: "#A7A8A9",
          warning: "#FEC233",
          error: "#F51F1F",
          success: "#32BE93",
          info: "#2196F3",
          accent: "#82B1FF",
          // link
          anchor: "#82B1FF",
          // colors
          blue: "#0066d0",
          grey: "#ACACAC",
          gray: "#D0D0CE",
          yellow: "#FEC233",
          red: "#F51F1F",
          green: "#32BE93",
          background: "#1A1A2F",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
