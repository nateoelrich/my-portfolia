export interface StudioRate {
	type: string;
	price: string;
	description: string;
}

export interface Equipment {
	category: string;
	items: string[];
}

export const studioInfo = {
	name: 'Fat Unc Studios',
	tagline: 'Making Art for the Rest of Us',
	description: 'A recording space for socially progressive, LGBTQ+, and creatively nonconforming artists who refuse to be silenced.',
	
	mission: {
		title: 'Our Mission',
		// Placeholder - user will fill this out
		statement: 'Fat Unc Studios exists to support and amplify artists who are socially progressive, LGBTQ+, and creatively nonconforming. [Add your full mission statement here about creating space for artists in the resistance and celebrating authentic, bold voices.]'
	},
	
	rates: [
		{
			type: 'Bands',
			price: '$40/hour',
			description: 'Full band recording sessions with all equipment included'
		},
		{
			type: 'Solo Artists',
			price: '$20/hour',
			description: 'Individual artist sessions with professional equipment'
		}
	] as StudioRate[],
	
	equipment: [
		{
			category: 'Drums',
			items: [
				'Mapex Armory (22" kick, various toms)',
				'Meinl Dual Classic cymbals(14" hi-hats, 12"/16" crash, 20" ride, 18" China)',
				'Ludwig Universal Snare',
				'Drum mics - all of \'em'
			]
		},
		{
			category: 'Microphones',
			items: [
				'Dynamic mics',
				'Condenser mics',
				'Ribbon mics',
				'Various specialty mics'
			]
		},
		{
			category: 'Strings and Amps',
			items: [
				'Marshall MG15FX',
				'Line6 HX Stomp',
				'Epiphone Les Paul Special II',
				'Epiphone SG Special VE',
                'Ibanex Talman Bass'
			]
		},
		{
			category: 'Sound System',
			items: [
				'PA system',
				'Monitors',
				'Cables and accessories'
			]
		}
	] as Equipment[],
	
	gallery: {
		title: 'The Space',
		// Placeholder for images - user will add later
		images: []
	},
	
	contact: {
		title: 'Book a Session',
		// Placeholder - user will fill this out
		email: '[Your contact email]',
		phone: '[Your phone number]',
		location: '[Your location]',
		// Placeholder for social links - user will add later
		socials: []
	}
};
