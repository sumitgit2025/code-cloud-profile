
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#171A68',
					foreground: '#fff',
				},
				navy: {
					DEFAULT: '#171A68',
				},
				teal: {
					DEFAULT: '#11B2A5',
				},
				accent: {
					DEFAULT: '#FFA94D',
				},
				secondary: {
					DEFAULT: '#F7F9FC',
					foreground: '#151A1F',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink': {
					'0%, 100%': { 'opacity': '1' },
					'50%': { 'opacity': '0' }
				},
				'fade-in-up': {
					'0%': { opacity: 0, transform: 'translateY(20px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' }
				}
			},
			animation: {
				'typing': 'typing 2.5s steps(40, end), blink 0.75s step-end infinite',
				'fade-in-up': 'fade-in-up 0.7s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
