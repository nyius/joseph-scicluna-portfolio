module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {},
		colors: {
			zinc: {
				100: '#d4d4d4',
				200: '#a3a3a3',
				300: '#737373',
				400: '#525252',
				800: '#262626',
				900: '#171717',
				1100: '#090909',
			},
			purple: {
				500: '#a855f7',
			},
			pink: {
				500: '#ec4899',
			},
			indigo: {
				500: '#6366f1',
				900: '#312e81',
				1500: '#111030',
			},
			black: '#000',
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['cyberpunk'],
		utils: true,
	},
};
