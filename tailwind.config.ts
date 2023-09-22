import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				light: {
					layout: {},
					colors: {
						default: '#F5F5F5',
						primary: '#F2EAD3',
						secondary: '#DFD7BF',
						warning: '#3F2305',
					},
				},
				dark: {
					layout: {},
					colors: {
						default: '#272829',
						primary: '#61677A',
						secondary: '#D8D9DA',
						warning: '#FFF6E0',
					},
				},
			},
		}),
	],
};

export default config;
