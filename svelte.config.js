import path from 'path';
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
		},
		// vite: {
		// 	build: {
		// 		rollupOptions: {
		// 			external: [
		// 				'validator'
		// 			]
		// 		}
		// 	}
		// }
	},
	compilerOptions: {
		// sveltePath: {
		// 	'@components': path.resolve('./src/components'),
		// 	'@constants': path.resolve('./src/constants'),
		// 	'@routes': path.resolve('./src/routes'),
		// 	'@store': path.resolve('./src/store'),
		// }
	},
};

export default config;
