/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/**.{html,js}"],
	theme: {
		extend: {
			backgroundColor: {
				default: "#08191d",
				primary: {
					DEFAULT: "#85d7ea",
					800: "#233b42",
				},
				secondary: "#0e819b",
				accent: "#24d3fc",
			},
			colors: {
				primary: "#e2f0f4",
				secondary: "#0B1A1E",
			},
			ringColor: {
				DEFAULT: "#08191d",
				primary: "#85d7ea",
				secondary: "#0e819b",
				accent: "#24d3fc",
			},
			fontFamily: {
				jetbrains: ["JetBrains Mono", "monospace"],
			},
			dropShadow: {
				glow: ["0 0px 6px rgba(36 211 252 / 0.35)", "0 0px 10px rgba(36 211 252 / 0.2)"],
			},
		},
	},
	plugins: [],
};
