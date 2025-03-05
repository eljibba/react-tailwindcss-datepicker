/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media",
    theme: {
        extend: {
            colors: {
                darkPrimary: "#1d1e20"
            }
        }
    },
    variants: {},
    /* eslint-disable @typescript-eslint/no-require-imports */
    plugins: [require("@tailwindcss/forms")]
    /* eslint-enable @typescript-eslint/no-require-imports */
};
