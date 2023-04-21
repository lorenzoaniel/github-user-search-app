/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			//LIGHTMODE
			backgroundColor: (theme) => ({
				//extends tailwinds original pallete
				...theme("colors"),
				primary: "#FEFEFE",
				secondary: "#F6F8FF",
				"btn-primary": "#0079FF",
			}),
			textColor: (theme) => ({
				...theme("colors"),
				primary: "#4B6A9B",
				secondary: "#2B3442",
				"link-primary": "#0079FF",
				toggle: "#697C9A",
				"btn-primary": "#FEFEFE",
			}),
			//DARKMODE
			dark: {
				backgroundColor: (theme) => ({
					//extends tailwinds original pallete
					...theme("colors"),
					primary: "#1E2A47",
					secondary: "#141D2F",
					"btn-primary": "#0079FF",
				}),
				textColor: (theme) => ({
					...theme("colors"),
					primary: "#FFFFFF",
				}),
			},
		},
	},
	plugins: [],
};
