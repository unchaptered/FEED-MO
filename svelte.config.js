import adapter from '@sveltejs/adapter-auto';

import sveltePreprocess from 'svelte-preprocess';
import svelteAutoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [
				svelteAutoprefixer(),
			],
			
		},
	}),
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	}
};

export default config;
