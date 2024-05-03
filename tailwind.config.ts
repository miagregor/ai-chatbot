import type { Config } from "tailwindcss";

const config: Config = {
  mode:'jit',
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   text: {
    //     main: "#222222",
    //   },
    //   primary: "#0DB02B",
    //   secondary: '#137D00',
    //   tertiary: '#025F1D',
    //   dark: '#3F4955',
    //   mediumDark: '#5E6D7E',
    //   medium: '#B8BABC',
    //   mediumLight: '#DCDBDA',
    //   light: '#F5F5F5',
    // },
    extend: {
      fontFamily: {
        // main: "Gilroy, sans-serif"
        body: ["Gilroy, sans-serif"]
      },
      colors: {
        text: {
          main: "#222222",
        },
        primary: "#0DB02B",
        secondary: '#137D00',
        tertiary: '#025F1D',
        dark: '#3F4955',
        mediumDark: '#5E6D7E',
        medium: '#B8BABC',
        mediumLight: '#DCDBDA',
        light: '#F5F5F5',
      },
      
      width: {
        maxWidth: "100%",
      }
    },
  },
  plugins: [],
};
export default config satisfies Config;
