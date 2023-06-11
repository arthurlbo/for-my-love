/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./stories/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#E8E8E8",
                primary: "#000",
            },
            fontFamily: {
                sans: "var(--font-poppins)",
                heading: "var(--font-concert) ",
            },
        },
    },
    plugins: [],
};
