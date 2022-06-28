module.exports = {
  prefix: "tw-",
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dn-purple": "#5f34cb",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
