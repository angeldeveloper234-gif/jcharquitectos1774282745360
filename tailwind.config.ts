import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#111111",
                foreground: "#F5F5F5",
                primary: {
                    DEFAULT: "#CBB37E",
                    foreground: "#000000",
                },
                secondary: {
                    DEFAULT: "#333333",
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#F5F5F5",
                },
                border: "rgba(255,255,255,0.1)",
            },
            fontFamily: {
                sans: ["Outfit", "sans-serif"],
                display: ["Syne", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            backgroundImage: {
                'blueprint-grid': "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}

export default config