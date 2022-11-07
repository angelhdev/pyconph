const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['../**/*.html'],
	theme: {
		extend: {
			screens: {
				sm: '600px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
			colors: {
				white: {
					DEFAULT: '#FFFFFF',
					60: 'rgba(255,255,255,0.6)',
					70: 'rgba(255,255,255,0.7)',
				},
				bianca: '#FBF7EE',
				cioccolato: {
					DEFAULT: '#4A300A',
					10: 'rgba(74, 48, 10, 0.1)',
					60: 'rgba(74, 48, 10, 0.6)',
				},
				nileblue: '#1A2851',
				yelloworange: {
					DEFAULT: '#FFAD39',
					70: 'rgba(255,173,57,0.7)',
				},
				woodsmoke: '#141515',
			},
			spacing: {
				0: '0',
				1: '0.0625rem',
				2: '0.125rem',
				3: '0.1875rem',
				4: '0.25rem',
				5: '0.3125rem',
				6: '0.375rem',
				7: '0.4375rem',
				8: '0.5rem',
				9: '0.5625rem',
				10: '0.625rem',
				11: '0.6875rem',
				12: '0.75rem',
				13: '0.8125rem',
				14: '0.875rem',
				15: '0.9375rem',
				16: '1rem',
				17: '1.0625rem',
				18: '1.125rem',
				19: '1.1875rem',
				20: '1.25rem',
				21: '1.3125rem',
				22: '1.375rem',
				23: '1.4375rem',
				24: '1.5rem',
				25: '1.5625rem',
				26: '1.625rem',
				27: '1.6875rem',
				28: '1.75rem',
				29: '1.8125rem',
				30: '1.875rem',
				31: '1.9375rem',
				32: '2rem',
				33: '2.0625rem',
				34: '2.125rem',
				35: '2.1875rem',
				36: '2.25rem',
				38: '2.375rem',
				39: '2.4375rem',
				40: '2.5rem',
				41: '2.5625rem',
				42: '2.625rem',
				44: '2.75rem',
				45: '2.8125rem',
				46: '2.875rem',
				47: '2.9375rem',
				48: '3rem',
				50: '3.125rem',
				68: '4.25rem',
				70: '4.375rem',
				90: '5.625rem',
				96: '6rem',
				102: '6.375rem',
				125: '7.8125rem',
				150: '9.375rem',
				172: '10.75rem',
				180: '11.25rem',
				200: '12.5rem',
				225: '14.063rem', 
				248: '15.5rem',
				280: '17.5rem',
				290: '18.125rem',
				300: '18.75rem',
				310: '19.375rem',
				342: '21.375rem',
				380: '23.75rem',
				390: '24.375rem',
				549: '34.313rem',
				600: '37.5rem',
				850: '53.125rem',
				1024: '64rem',
				1050: '65.625rem',
				1150: '71.875rem',
				1204: '75.25rem',
				1280: '80rem',
				'screen-32': 'calc(100vw - 32px)',
				'half-15': 'calc(50% - 15px)',
				'quarter-15': 'calc(25% - 15px)'
			},
			fontFamily: {
				ubuntu: 'Ubuntu',
				tagalogdoctrina1593: 'Tagalog-Doctrina-1593',
				baybayinsisil: 'Baybayin-Sisil',
			},
			fontSize: (theme) => ({
				...theme('spacing'),
			}),
			minHeight: (theme) => ({
				...defaultTheme.minHeight,
				...theme('spacing'),
			}),
			maxHeight: (theme) => ({
				...theme('spacing'),
			}),
			maxWidth: (theme) => ({
				...theme('spacing'),
			}),
			minWidth: (theme) => ({
				...theme('spacing'),
			}),
			inset: (theme) => ({
				...theme('spacing'),
			}),
			lineHeight: (theme) => ({
				...defaultTheme.lineHeight,
				primary: '1.293rem',
				...theme('spacing'),
			}),
			gap: (theme) => ({
				...theme('spacing'),
			}),
			borderWidth: (theme) => ({
				...theme('spacing'),
			}),
		},
	},
	plugins: [],
};
