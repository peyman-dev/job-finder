import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "762px",
      lg: "992px",
      xl: "1280px",
    },
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        "IranSansX-Light": "IranSansX-Light",
        "IranSansX-Medium": "IranSansX-Medium",
        "IranSansX-Regular": "IranSansX-Regular",
        "IranSansX-Bold": "IranSansX-Bold",
        "IranSansX-DemiBold": "IranSansX-DemiBold",
        "IranSansX-ExtraBlack": "IranSansX-ExtraBlack",
        "IranSansX-ExtraBold": "IranSansX-ExtraBold",
        "IranSansX-Heavy": "IranSansX-Heavy",
        "IranSansX-Black": "IranSansX-Black",
        "IranSansX-Thin": "IranSansX-Thin",
        "IranSansX-UltraLight": "IranSansX-UltraLight",
      },
      colors: {
        primary: "#0A65CC"
      }
    },
  },
  plugins: [function ({ addVariant }: any) {
    addVariant("child", "& > *")
    addVariant("child-hover", "& > *:hover")
    addVariant("child-active", "& > *:active")
    addVariant("child-focus", "& > *:focus")
    addVariant("child-first", "& > *:first-child")
    addVariant("child-last", "& > *:last-child")
    addVariant("child-odd", "& > *:nth-child(odd)")
    addVariant("child-even", "& > *:nth-child(even)")
    addVariant("child-disabled", "& > *:disabled")
    addVariant("child-visited", "& > *:visited")
    addVariant("child-checked", "& > *:checked")
    addVariant("child-before", "& > *::before")
    addVariant("child-after", "& > *::after")
  }],
};
export default config;
