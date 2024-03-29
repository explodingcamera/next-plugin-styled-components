# @explodingcamera/next-plugin-styled-components

`@explodingcamera/next-plugin-styled-components` made it possible to use `styled-components` in next.js without any special configuration, HMR included.

Due to the removal of propper plugin support, this isn't possible with next.js anymore.
Please check out their example for how to manually configure styled-components support [here](https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js).

<!--
## Compatibility Matrix

| Package Version | Next.JS Version   |
| --------------- | ----------------- |
| `1.2.x`         | `9.2.x`           |
| `1.3.x`         | `9.3.x` & `9.4.x` |
| `2.0.x`         | `9.5.x`           |
| `2.0.x`         | `10.0.0`          |
| `2.1.x`         | `10.0.1`          |
| `10.0.2`        | `10.0.2`          |
| `10.0.3`        | `10.0.3`          |

All later versions follow next.js's versioning, so eg. `10.0.2` is compatible with nextjs >= `10.0.2`

## Installation

1. Install the package
   `$ npm install @explodingcamera/next-plugin-styled-components styled-components`

2. Enable the plugin in your next.config.js
   `next.config.js`

   ```js
   const nextPluginSC = require("@explodingcamera/next-plugin-styled-components");

   module.exports = nextPluginSC({
     // your next.js config
   });
   ```

[Theres also an example available](packages/example).

## Caveats

### Custom `_document.js`

If you are using a custom `_document.js`, you will need to include a small snipped in you render function (full [example](packages/example):

```js
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>{this.props.headTags}</Head> {/* this line needs to be added */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

### Compatibility

This package is based on experimental next.js features, so it might stop working unexpectedly on newer next.js versions. Please report any issues here.

While next.js doesn't recommend to already create plugins, I created this because this project's scope isn't that large & I use it in production for multiple projects and thus will update it to work with new next.js versions.

When using Yarn Workspaces, Lerna or similar, make sure next.js and this plugin are in the same `node_modules` directory by using the `nohoist` option or the equivalent in said tool. -->
