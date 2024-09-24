import { vitePreprocess } from '@astrojs/svelte';

export default {
	preprocess: vitePreprocess(),
	"overrides": {"@sveltejs/vite-plugin-svelte": "^4.0.0-next.6"}
}
