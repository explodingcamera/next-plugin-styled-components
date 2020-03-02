
  

# @explodingcamera/next-plugin-styled-components

  

`@explodingcamera/next-plugin-styled-components` makes it possible to use `styled-components` in next.js without any special configuration.

  

**Compatibility**

  

| Package Version | Next.JS Version |
|-----------------|-----------------|
| `1.2.x` | `9.2.x` |

  

## Installation

1. Install the package
	`$ npm install @explodingcamera/next-plugin-styled-components styled-components`

2. Enable the plugin in your next.config.js
	`next.config.js`
	```js
	const nextPluginSC = require('@explodingcamera/next-plugin-styled-components');

	module.exports  = nextPluginSC({
		// your next.js config
	})
	```

[Theres also an example available](packages/example).

  

## Caveats

This package is based on experimental next.js features, so it might stop working unexpectedly on newer next.js versions. Please report any issues here.

  

While next.js doesn't recommend to already create plugins, I created this because this project's scope isn't that large & I use it in production for multiple projects and thus will update it to work with new next.js versions.

  

When using Yarn Workspaces, Lerna or similar, make sure next.js and this plugin are in the same `node_modules` directory by using the `nohoist` option or the equivalent in said tool.