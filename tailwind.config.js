/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ffffff',
                secondary: '#a0a0a0',
                dim: '#888888',
                'glass-border': 'rgba(255, 255, 255, 0.12)',
            },
            fontFamily: {
                header: ['Orbitron', 'sans-serif'],
                main: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
