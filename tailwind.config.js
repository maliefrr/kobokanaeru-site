module.exports = {
  content: ["./index.html"],
  theme: {
      container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0EA5E9",
      },
      fontFamily: { 
        poppins: ["Poppins", "sans-serif"],
      },
      screen: {
        "2xl": "1320px",
      },
      backgroundImage: {
        "skybg": "url('/assets/img/skybg.jpg')",
      }
    },
  },
  plugins: [],
}
