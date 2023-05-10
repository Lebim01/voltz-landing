/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        "primary": "#2E5CFF",
        "primary-dark": "#002196",
        "secondary": "#F7CB2F",
        "secondary-dark": "#c69c07",
        
        "border-1": "#E4E9FC",
        "border-2": "#E0E4F1",
        
        "text-primary": "#2D3243",
        "text-secondary": "#394055",
        "text-tertiary": "#787F84",

        "bg-transparent": "rgba(57, 64, 85, 0.9)"
      },
      screens: {
        'hover-hover': {'raw': '(hover: hover)'},
      }
    },
    fontSize: {
      "3xl": [48, "62px"],
      "2xl": [40, "48px"],
      xl: [32, "40px"],
      lg: [24, "32px"],
      "base-md": [20, "28px"],
      base: [16, "24px"],
      sm: [14, "16px"]
    }
  },
  plugins: [],
}

