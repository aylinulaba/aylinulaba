export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          50: "#FAFAFA",
          200: "#F4F4F5",
          500: "#71717B",
          800: "#27272A",
          950: "#09090B"
        },
        accent: "#FD5C63"
      },
      fontFamily: {
        sans: ["Soehne", "ui-sans-serif", "system-ui", "SF Pro Display", "SF Pro Text", "Helvetica", "Arial", "sans-serif"]
      },
      fontSize: {
        "48": ["48px", { lineHeight: "56px" }],
        "28": ["28px", { lineHeight: "36px" }],
        "20": ["20px", { lineHeight: "28px" }],
        "16": ["16px", { lineHeight: "24px" }],
        "15": ["15px", { lineHeight: "22px" }],
        "14": ["14px", { lineHeight: "20px" }],
        "12": ["12px", { lineHeight: "16px" }]
      }
    }
  },
  plugins: []
}