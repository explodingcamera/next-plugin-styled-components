const React = require('react');
const { ServerStyleSheet, createGlobalStyle } = require('styled-components');

const Global = createGlobalStyle`
  body {
    display: block; /* fixes next.js development mode blinking issue */
  }
`;

async function headTags(ctx) {
	ctx.sheet = new ServerStyleSheet();
	const originalRenderPage = ctx.renderPage;

	try {
		await originalRenderPage({
			enhanceApp: App => props =>
				ctx.sheet.collectStyles(
					<>
						<App {...props} />
						<Global />
					</>,
				),
		});

		return ctx.sheet.getStyleElement();
	} finally {
		ctx.sheet.seal();
	}
}

module.exports = headTags;
