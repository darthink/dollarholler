module.exports = {
	useTabs: true,
	tabWidth: 4,
	singleQuote: true,
	trailingComma: "none",
	printWidth: 100,
	tailwindConfig: './tailwind.config.cjs',
	plugins: [
		require('prettier-plugin-tailwindcss'),
	],
	pluginSearchDirs: ["."],
	overrides: [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
}
