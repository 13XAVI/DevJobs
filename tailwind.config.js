/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      KumbhSans: ['Kumbh Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        violete: "#5964E0",
        ligthViolete: "#939BF4",
        VeryDArkBlue: "#19202D",
        midNigth: "#121721",
        white: "#ffff",
        ligthGray: "#F4F6F8",
        Gray: "#9DAEC2",
        DarkGray: "#6E8098",
        YellowScoote: "#E99210",
        whiteViolete: "#EFF0FC",

        paleViolet: "rgba(89, 100, 224, 0.2)",
        darkBlue: "#19202d",



      }

    }

  },
  plugins: [],
};
