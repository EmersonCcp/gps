/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "fondo-principal": "url('/assets/img/fondo.jpg')",
        hero: "url('https://m-cdn.phonearena.com/images/article/134582-wide-two_1200/The-best-motorcycle-phone-mount-you-can-buy---our-top-list.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
