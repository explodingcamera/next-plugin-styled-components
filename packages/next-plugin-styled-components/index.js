module.exports = (nextConfig = {}) => {
	const cfg = {
		...nextConfig,
		experimental: {
			...(nextConfig.experimental && nextConfig.experimental),
			plugins: true,
		},
		plugins: [
			...(nextConfig.plugins || []),
			'@explodingcamera/next-plugin-styled-components',
		],
	};

	return cfg;
};
