const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	darkMode: "class",
	content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
}
