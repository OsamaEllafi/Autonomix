/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0f1117',
                secondary: '#3b3f51',
                accent: '#5a5f73',
                dim: '#6b7085',
                'glass-border': 'rgba(15, 17, 23, 0.07)',
            },
            fontFamily: {
                header: ['Orbitron', 'sans-serif'],
                main: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
