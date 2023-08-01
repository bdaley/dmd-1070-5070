import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://bdaley.github.io",
	base: '/dmd-1070-5070/',
	integrations: [
		starlight({
			title: 'DMD 1070/5070',
			social: {
				github: 'https://github.com/bdaley/dmd-1070-5070',
				twitter: 'https://twitter.com/uconnwebprof',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started'}
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
