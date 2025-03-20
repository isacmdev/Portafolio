/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				softRed: '#FF748B',
				darkPink: '#AF1740',
				textDarkPink: '#da2650',
				textPrincipal: '#DDDDD'
			},
		},	
	},
	plugins: [],
}
