/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00f3ff',
                secondary: '#bc13fe',
                dim: '#a1a1a1',
                'glass-border': 'rgba(255, 255, 255, 0.1)',
            },
            fontFamily: {
                header: ['Orbitron', 'sans-serif'],
                main: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
