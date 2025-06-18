module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.html'
	],
	swDest: 'build',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};