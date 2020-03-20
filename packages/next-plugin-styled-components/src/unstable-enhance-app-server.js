const React = require('react');
const { ServerStyleSheet, createGlobalStyle } = require('styled-components');

const Global = createGlobalStyle`
  body {
    display: block; /* fixes next.js development mode blinking issue */
  }
`;

async function enhanceApp(ctx) {
	ctx.sheets = new ServerStyleSheet();
	return App => props =>
		ctx.sheets.collectStyles(
			<React.Fragment>
				<Global />
				<App {...props} />
			</React.Fragment>,
		);
}

module.exports = enhanceApp;
