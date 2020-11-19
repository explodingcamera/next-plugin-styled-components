// Incase the next.js version doesn't match up with our version,
// try to make it work anyways
// This is super cheat-y, sue me :p
try {
	const fs = require('fs');
	const path = require('path');
	const { version } = require('next/package.json');
	const pkgpath = path.join(__dirname, 'package.json');
	const pkg = JSON.parse(fs.readFileSync(pkgpath).toString());

	pkg.origVersion = pkg.origVersion || pkg.version;

	if (pkg.version !== version) {
		pkg.version = version;
		fs.writeFileSync(pkgpath, JSON.stringify(pkg, null, 2));
	}

	if (pkg.origVersion !== version) {
		console.error(
			'@explodingcamera/next-plugin-styled-components >> You are using an untested version of next.js',
		);
	}
} catch (_) {}

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
