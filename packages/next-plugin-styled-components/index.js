module.exports = (nextConfig = {}) => {
	const cfg = {
		...nextConfig,
		experimental: {
			...(nextConfig.experimental && nextConfig.experimental),
			plugins: true,
		},
	};

	return cfg;
};
