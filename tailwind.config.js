/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/*.html"],
	theme: {
		extend: {
			fontFamily: {
				"roboto-slab": ["Roboto Slab", "serif"],
				rubik: ["Rubik", "sans-serif"],
			},
			colors: {
				// "accent-1": "#F9F0E5",
				// "accent-2": "#9ECDD1",
				// "accent-3": "#FB8557",
				// "accent-4": "#FEDEDE",
				"accent-1": "#1B262C",
				"accent-2": "#0F4C75",
				"accent-3": "#3282B8",
				"accent-4": "#BBE1FA",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "6rem",
					lg: "14rem",
					xl: "22rem",
					"2xl": "30rem",
				},
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
