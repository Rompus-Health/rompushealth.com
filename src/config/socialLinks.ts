// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialLinks: SocialLink[] = [
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/company/rompus-health/',
		icon: 'linkedin-icon'
	},
	{
		name: 'x',
		link: '/',
		icon: 'x-icon'
	},
	{
		name: 'github',
		link: 'https://github.com/Rompus-Health/',
		icon: 'github-icon'
	}
]
