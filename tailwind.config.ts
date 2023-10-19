import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: {
            DEFAULT: "#202d36",
            foreground: "#FFFFFF"
          },
          default: {
            DEFAULT: "#FAFAFA",
            foreground: "#000000"
          },
          primary: {
            DEFAULT: "#2b3743",
            foreground: "#FFFFFF",
            "50": "#2b3743",
            "100": "rgba(43, 55, 67, 0.5)",
          },
          content1: {
            DEFAULT: "#2b3743"
          },
          content2: {
            DEFAULT: "rgba(43, 55, 67, 0.5)"
          }
        }
      },
      light: {
        colors: {
          background: {
            DEFAULT: "#FAFAFA",
            foreground: "#000000"
          },
          default: {
            DEFAULT: "#202d36",
            foreground: "#FFFFFF"
          },
          primary: {
            DEFAULT: "#FFFFFF",
            foreground: "#000000",
            "50": "#FFFFFF",
            "100": "#F2F2F2",
          },
          content1: {
            DEFAULT: "#FFFFFF"
          },
          content2: { 
            DEFAULT: "#F2F2F2"
          }
        },
      },
    }
  })],
}
export default config
