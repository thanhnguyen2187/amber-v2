module.exports = {
  content: ["./src/**/*.rs"],
  theme: {
    extend: {},
  },
    plugins: [
      require('@tailwindcss/typography'),
      require("daisyui"),
    ],
}
