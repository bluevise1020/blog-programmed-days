import tailwindTypography from "@tailwindcss/typography";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    apiBaseUrl: process.env.MICROCMS_API_BASE_URL,
    apiKey: process.env.MICROCMS_API_KEY,

    public: {
      siteTitle: process.env.PUBLIC_SITE_TITLE,
    },
  },

  css: ["~/assets/scss/main.scss"],

  modules: [
    "@nuxtjs/eslint-module",
    [
      "@nuxtjs/google-fonts",
      {
        display: "swap",
        families: { "Noto Sans JP": [400, 700] },
        preload: true,
      },
    ],
    [
      "@nuxtjs/tailwindcss",
      {
        config: {
          content: [],
          plugins: [tailwindTypography],
        },
      },
    ],
    [
      "dayjs-nuxt",
      {
        defaultLocale: "ja",
        defaultTimezone: "Asia/Tokyo",
        plugins: [
          "isBetween",
          "isLeapYear",
          "isSameOrAfter",
          "isSameOrBefore",
          "isToday",
          "isTomorrow",
          "isYesterday",
          "timezone",
          "utc",
        ],
      },
    ],
  ],

  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
    // typeCheck: false, // 型チェックは pnpm run typecheck を実行する
  },
});
