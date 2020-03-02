const stuff = opts => {
	opts.plugins.push([
		'styled-components',
		{
			ssr: true,
			displayName: true,
			pure: true,
		},
	]);
};

module.exports = stuff;
