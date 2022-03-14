const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue != undefined) {
      return `rgba(var(${variableName}) / ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
};

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        skin: {
          200: withOpacity("--skin-200"),
          500: withOpacity("--skin-500"),
          800: withOpacity("--skin-800"),
        },
      },
    },
  },
  plugins: [],
};
