/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./screens/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#7abd32",
                "primary-dark": "#639e26",
                "warning": "#f59e0b",
                "warning-light": "#fef3c7",
                "background-light": "#fafafa",
                "background-dark": "#17171c",
                "surface-light": "#ffffff",
                "surface-dark": "#212126",
                "card-light": "#ffffff",
                "card-dark": "#2c3035",
                "text-main": "#131612",
                "text-muted": "#836e67",
                "success": "#87A288",
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"]
            },
            borderRadius: { "lg": "1rem", "xl": "1.5rem", "2xl": "2rem", "full": "9999px" },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'glow': '0 0 15px rgba(122, 189, 50, 0.3)'
            }
        },
    },
    plugins: [],
}
