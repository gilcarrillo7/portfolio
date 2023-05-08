/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "0",
			},
		},
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
		},
		extend: {
			colors: {
				maindark: "#000000",
				secdark: "#FFFFFF",
				mainlight: "#FFFFFF",
				seclight: "#000000",
			},
		},
	},
	plugins: [],
};
