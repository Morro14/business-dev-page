import { defineConfig } from "i18next-cli";

export default defineConfig({
  locales: ["en", "ru"],
  extract: {
    input: ["app/**/*.{js,jsx,ts,tsx}"],
    output: "src/i18n/locales/{{language}}/{{namespace}}.json",
  },
});

