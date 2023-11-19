module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },

  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },

  extends: ["@nuxtjs/eslint-config-typescript", "plugin:vue/vue3-recommended", "plugin:prettier/recommended"],

  plugins: ["prettier", "vue"],

  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "vue/no-multiple-template-root": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
  },

  overrides: [
    {
      files: ["composables/**/*.ts", "layouts/*.vue", "pages/**/*.vue", "utils/**/*.ts"],
      rules: { camelcase: "off", "vue/multi-word-component-names": "off" },
    },
  ],
};
