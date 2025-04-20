/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  mode: 'jit',
  purge: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gradient': 'linear-gradient(180deg, #FFA752 0%, #F94348 46%, #6C3C9D 100%)',
      },
      colors: {
        'primary': '#F94348',
        'secondary': {
          100: '#9363FB',
          200: '#6C3C9D',
        },
        red: {
          100: "#fed9da",
          200: "#fdb4b6",
          300: "#fb8e91",
          400: "#fa696d",
          500: "#f94348",
          600: "#c7363a",
          700: "#95282b",
          800: "#641b1d",
          900: "#320d0e"
        },
        purple: {
          100: "#e9e0fe",
          200: "#d4c1fd",
          300: "#bea1fd",
          400: "#a982fc",
          500: "#9363fb",
          600: "#764fc9",
          700: "#583b97",
          800: "#3b2864",
          900: "#1d1432"
        },
        blue: {
          100: "#d8f3fe",
          200: "#b1e8fc",
          300: "#8adcfb",
          400: "#63d1f9",
          500: "#3cc5f8",
          600: "#309ec6",
          700: "#247695",
          800: "#184f63",
          900: "#0c2732"
        },
        green: {
          100: "#dbf5e8",
          200: "#b7ead0",
          300: "#92e0b9",
          400: "#6ed5a1",
          500: "#4acb8a",
          600: "#3ba26e",
          700: "#2c7a53",
          800: "#1e5137",
          900: "#0f291c"
        },
        yellow: {
          100: "#fff7d9",
          200: "#ffeeb4",
          300: "#ffe68e",
          400: "#ffdd69",
          500: "#ffd543",
          600: "#ccaa36",
          700: "#998028",
          800: "#66551b",
          900: "#332b0d"
        },
        orange: {
          100: "#ffe9db",
          200: "#ffd4b6",
          300: "#ffbe92",
          400: "#ffa96d",
          500: "#ff9349",
          600: "#cc763a",
          700: "#99582c",
          800: "#663b1d",
          900: "#331d0f"
        },
        black: {
          100: "#d0d0d2",
          200: "#BCB9AD",
          300: "#7D8073",
          400: "#313337",
          500: "#121520",
          600: "#0e111a",
          700: "#0b0d13",
          800: "#07080d",
          900: "#040406"
        },
        white: {
          100: "#fffffe",
          200: "#fffefc",
          300: "#fefefb",
          400: "#fefdf9",
          500: "#fefdf8",
          600: "#cbcac6",
          700: "#989895",
          800: "#666563",
          900: "#333332"
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        texturina: ['Texturina', 'serif'],
        firacode: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          "@supports (-moz-appearance: none)": {
            "scrollbar-width": "thin",
            "scrollbar-color": "#fefdf9 #fefdf9",
          },
        },

        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            transition: "background-color 0.3s ease, background 1s ease",
          },
          "&::-webkit-scrollbar-track:hover": {
            background: "rgba(254, 253, 249, 0.3)", // 50% transparent
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#e63235", // darker red on hover
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#F94348",
            borderRadius: "20px",
          },
        },
        ".image-smooth": {
          imageRendering: "smooth", // smooth (browser-default antialiasing)
        },
        ".image-crisp": {
          imageRendering: "crisp-edges",
        },
        ".image-pixelated": {
          imageRendering: "pixelated",
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

