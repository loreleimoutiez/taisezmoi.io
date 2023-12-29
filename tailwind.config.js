import daisyui from 'daisyui';

export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'media',
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#d600ff",
          "secondary": "#fa676c",
          "accent": "#0065ff",
          "neutral": "#070c0d",
          "base-100": "#113338",
          "info": "#2294ff",
          "success": "#009b6f",
          "warning": "#ff7700",
          "error": "#b50000",
        },
      },
    ],
  },
  variants: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
};
