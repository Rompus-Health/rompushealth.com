// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'End to End Prior Authorization for Oncology', 
		text: 'Rompus.'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		// { name: 'Pricing', link: '/pricing' },
		{ name: 'Features', link: '/features' },
		{ name: 'Blog', link: '/blog' },
		{ name: 'FAQ', link: '/faq' },
		{
			name: 'Resources',
			link: '#',
			submenu: [
				{ name: 'Changelog', link: '/changelog' },
				{ name: 'Terms', link: '/terms' }
			]
		},
		//{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Get In Touch', link: '/contact', style: 'primary', size: 'lg' }]
}
