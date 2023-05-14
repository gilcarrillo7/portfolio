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
				maindark: "#000011",
				secdark: "#F1F6F9",
				thirddark: "#FFC643",
				mainlight: "#F1F6F9",
				seclight: "#000011",
				red: "#FF0000",
			},
		},
	},
	plugins: [],
};
