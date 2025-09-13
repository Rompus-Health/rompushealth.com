// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Rompus Health | Intelligent Prior Authorization Solution for Oncology',
	siteDescription:
		'Rompus Health is a AI Clinical Decision Support Software built for oncology practices to deliver guideline concordant care and streamline prior authorization',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Rompus Health logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
