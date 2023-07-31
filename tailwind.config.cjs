/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				typoMoisier: ['Typo Moisier', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
