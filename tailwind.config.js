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
			},
			purple: {
				500: '#a855f7',
			},
			pink: {
				500: '#ec4899',
			},
			indigo: {
				500: '#6366f1',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['retro'],
		utils: true,
	},
};
