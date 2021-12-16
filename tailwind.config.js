module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        70: "70vh",
      },
      fontSize: {
        headings: "3.25rem",
        body: "1.25rem",
        footer: "2.1875rem",
        SecondFooter: "0.68rem",
        Argus: "1.625rem",
      },
      padding: {
        10: "2.5rem",
        213: "21vh",
      },
      width: {
        500: "53vh",
      },
      height: {
        160: "10rem",
      },
      fontFamily: {
        Argus: ["Noto"],
        Lato: ["Lato"],
      },
    },
  },
  plugins: [],
};
