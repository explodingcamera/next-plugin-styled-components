
# @explodingcamera/next-plugin-styled-components

`@explodingcamera/next-plugin-styled-components` makes it possible to use `styled-components` in next.js without any special configuration.

**Currently supported next.js versions:** 9.2.0

## Installation
1. Install the package 
	`$ npm install @explodingcamera/next-plugin-styled-components`
2. Enable experimental plugin support in your next.config.js
	`next.config.js`
	```js
	module.exports  = {
		experimental: {
			plugins:  true,
		}
	}
	```
	[Theres also an example available](packages/example).

## Caveats
This package is based on experimental next.js features, so it might stop working unexpectedly on newer next.js versions. Please report any issues here.

When using Yarn Workspaces, Lerna or similar, make sure next.js and this plugin are in the same node_modules directory by using the `nohoist` in said tool.