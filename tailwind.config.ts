/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "xs": "475px",
        ...defaultTheme.screens,
          },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        inputInfo: {
          err_color: "hsl(var(--inputInfoError))",
          succ_color: "hsl(var(--inputInfoSuccess))",
        },
        main: {
          red : "hsl(var(--main_red))",
          dark : "hsl(var(--main_dark))",
          white_100 : "hsl(var(--main_white_100))",
          white_300 : "hsl(var(--main_white_300))",
          match_color : "hsl(var(--main_match_color))",
          login_input_info_color : "hsl(var(--main_login_input_info_color))"
        },
        // whiteColor_200: "#bcbcbc",
        // grayColor_700:"#777"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "slide-X": {
          from: { '0%': { transform: 'rotateX(-100%)' }},
          to: { '100%': { transform: 'rotateX(0)' }}
         
         ,
        }
        
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
         "slide-X":  "slide-X 5s infinite linear"
        // "animate-pulse": {
        //   '0%': { left: '3.5vw' },
        //   '100%': { left: '100%' },
        // }
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}