module.exports = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundColor: {
				primary: "#FEFEFE",
				secondary: "#F6F8FF",
				"btn-primary": "#0079FF",
				"dark-primary": "#1E2A47",
				"dark-secondary": "#141D2F",
				"dark-btn-primary": "#0079FF",
			},
			textColor: {
				primary: "#4B6A9B",
				secondary: "#2B3442",
				"link-primary": "#0079FF",
				toggle: "#697C9A",
				"btn-primary": "#FFFFFF",
				"dark-btn-primary": "#FEFEFE",
				"dark-primary": "#FFFFFF",
			},
			screens: {
				md: "768px",
				lg: "1440px",
			},
			fontFamily: {
				spacebold: [`spacemonobold`, "monospace"],
				spacereg: [`spacemonoregular`, "monospace"],
			},
			fontSize: {
				h1: ["2.6rem", { lineHeight: "3.8rem", fontWeight: "700" }],
				h2: ["2.2rem", { lineHeight: "3.3rem", fontWeight: "700" }],
				h3: ["1.6rem", { lineHeight: "2.4rem", fontWeight: "400" }],
				h4: ["1.3rem", { lineHeight: "2.0rem", fontWeight: "400" }],
				body: ["1.5rem", { lineHeight: "2.5rem", fontWeight: "400" }],
				statstitle: ["1.1rem", { lineHeight: "1.6", fontWeight: "400" }],
				themetoggle: ["1.3rem", { lineHeight: "1.9rem", fontWeight: "700" }],
				searchbtn: ["1.4rem", { lineHeight: "2.1rem", fontWeight: "400" }],
				searchbar: ["1.3rem", { lineHeight: "2.5rem", fontWeight: "400" }],
			},
			boxShadow: {
				container: "0 1.6rem 3rem 1rem rgba(70, 96, 187, 0.198567)",
				"dark-container": "0 0 0 0 rgba(70, 96, 187, 0)",
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["dark"],
			textColor: ["dark"],
		},
	},

	plugins: [],
};
