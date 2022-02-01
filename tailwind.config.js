module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        te: "#96CEB4",
        cr: "#FFEEAD",
        re: "#D9534F",
        or: "#FFAD60",
        br: "#483434",
        na: "#0F2C67"
      },
      screens: {
        phone: { max: '640px' },
        // => @media (max-width: 640px) { ... }
        laptop: { max: '1440px' },
        // => @media (max-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}
