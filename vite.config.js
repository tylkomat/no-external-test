import { sveltekit } from '@sveltejs/kit/vite';
import pkg from './package.json';

/** @type {import('vite').UserConfig} */
const config = ({command}) => {
	return {
		plugins: [sveltekit()],
		ssr: {
			noExternal: command === 'build' ? Object.keys(pkg.devDependencies) : [],
		}
	};
};

export default config;
