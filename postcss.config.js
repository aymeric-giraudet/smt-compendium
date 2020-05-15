const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./shared/**/*.tsx", "./pages/**/*.tsx", "./components/**/*.tsx"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    whitelist: ["body"]
  },
];

module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-preset-env",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
