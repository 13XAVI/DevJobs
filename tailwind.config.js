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
        logoBackground1: "hsl(36, 87%, 49%)",
        logoBackground2: "hsl(12, 79%, 52%)",
        logoBackground3: "hsl(235, 10%, 23%)",
        logoBackground4: "hsl(227, 62%, 48%)",
        logoBackground5: "hsl(216, 46%, 14%)",
        logoBackground6: "hsl(295, 55%, 21%)",
        logoBackground7: "hsl(254, 71%, 45%)",
        logoBackground8: "hsl(218, 58%, 31%)",
        logoBackground9: "hsl(29, 60%, 87%)",
        logoBackground10: "hsl(0, 0%, 12%)",
        logoBackground11: "hsl(157, 57%, 50%)",
        logoBackground12: "hsl(22, 89%, 52%)",
        logoBackground13: "hsl(157, 57%, 50%)",
        logoBackground14: "hsl(29, 60%, 87%)",
        logoBackground15: "hsl(12, 79%, 52%)",



      }

    }

  },
  plugins: [],
};
