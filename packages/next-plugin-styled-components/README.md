
  

# @explodingcamera/next-plugin-styled-components

  

`@explodingcamera/next-plugin-styled-components` makes it possible to use `styled-components` in next.js without any special configuration.

  

**Compatibility**

  

| Package Version | Next.JS Version |
|-----------------|-----------------|
| `1.0.x` | `9.2.x` |

  

## Installation

1. Install the package
	`$ npm install @explodingcamera/next-plugin-styled-components styled-components`

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

  

While next.js doesn't recommend to already create plugins, I created this because this project's scope is't that large & I use it in production and thus will update it to work with new next.js versions.

  

When using Yarn Workspaces, Lerna or similar, make sure next.js and this plugin are in the same node_modules directory by using the `nohoist` in said tool.